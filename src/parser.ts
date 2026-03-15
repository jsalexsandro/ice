import { Token, TokenType } from "./lexer"
import { Expr, Stmt } from "./ast"
import { ErrorMessages } from "./errors"

export class Parser {
  private tokens: Token[]
  private position: number = 0

  constructor(tokens: Token[]) {
    this.tokens = tokens
  }

  /*
  =====================================
  Precedence Table
  =====================================
  */

  private precedence: Map<string, number> = new Map([
    [TokenType.OR, 1],
    [TokenType.AND, 2],
    [TokenType.EQUAL, 3],
    [TokenType.NOT_EQUAL, 3],
    [TokenType.LESS_THAN, 4],
    [TokenType.LESS_EQUAL, 4],
    [TokenType.GREATER_THAN, 4],
    [TokenType.GREATER_EQUAL, 4],
    [TokenType.PLUS, 5],
    [TokenType.MINUS, 5],
    [TokenType.STAR, 6],
    [TokenType.SLASH, 6],
    [TokenType.MODULO, 6],
    [TokenType.ASSIGN, 0],
    [TokenType.LPAREN, 20],
    [TokenType.DOT, 20],
    [TokenType.LBRACKET, 20],
  ])

  private getPrecedence(type: string): number {
    return this.precedence.get(type) ?? 0
  }

  /*
  =====================================
  Cursor helpers
  =====================================
  */

  private current(): Token {
    return this.tokens[this.position]
  }

  private peek(): Token {
    return this.tokens[this.position + 1]
  }

  private advance(): Token {
    const token = this.current()
    this.position++
    return token
  }

  private expect(type: TokenType): Token {
    const token = this.current()

    if (token.type !== type) {
      throw new Error(`Expected token ${type} but got ${token.type}`)
    }

    return this.advance()
  }

  /*
  =====================================
  Entry point
  =====================================
  */

  public parseProgram() {
    const statements: Stmt[] = []

    while (!this.isEOF()) {
      statements.push(this.parseStatement())
    }

    return {
      kind: "Program",
      body: statements
    }
  }

  /*
  =====================================
  Statements
  =====================================
  */

  private parseStatement(): Stmt {
    const token = this.current()

    if (token.type === TokenType.KEYWORD) {
      if (token.value === 'val' || token.value === 'const') {
        return this.parseVariableDeclaration()
      }
      if (token.value === 'if') {
        return this.parseIfStatement()
      }
      if (token.value === 'while') {
        return this.parseWhileStatement()
      }
      if (token.value === 'for') {
        return this.parseForStatement()
      }
      if (token.value === 'func') {
        return this.parseFunctionStatement()
      }
      if (token.value === 'return') {
        return this.parseReturnStatement()
      }
    }

    if (token.type === TokenType.LBRACE) {
      return this.parseBlockStatement()
    }

    return this.parseExpressionStatement()
  }

  private parseBlockStatement(): BlockStmt {
    this.expect(TokenType.LBRACE)
    
    const statements: Stmt[] = []
    while (this.current().type !== TokenType.RBRACE && !this.isEOF()) {
      statements.push(this.parseStatement())
    }
    
    this.expect(TokenType.RBRACE)

    return {
      kind: "BlockStmt",
      statements
    }
  }

  private parseIfStatement(): IfStmt {
    this.expect(TokenType.KEYWORD)
    this.expect(TokenType.LPAREN)
    const condition = this.parseExpression()
    this.expect(TokenType.RPAREN)
    
    const thenBranch = this.parseStatement()
    
    let elseBranch: Stmt | undefined = undefined
    if (this.current().type === TokenType.KEYWORD && this.current().value === 'else') {
      this.advance()
      elseBranch = this.parseStatement()
    }

    return {
      kind: "IfStmt",
      condition,
      thenBranch,
      elseBranch
    }
  }

  private parseWhileStatement(): WhileStmt {
    this.expect(TokenType.KEYWORD)
    this.expect(TokenType.LPAREN)
    const condition = this.parseExpression()
    this.expect(TokenType.RPAREN)
    
    const body = this.parseStatement()

    return {
      kind: "WhileStmt",
      condition,
      body
    }
  }

  private parseForStatement(): ForStmt {
    this.expect(TokenType.KEYWORD)
    this.expect(TokenType.LPAREN)
    
    const initializer = this.parseVariableDeclaration()
    
    const condition = this.parseExpression()
    this.expect(TokenType.SEMICOLON)
    
    const update = this.parseExpression()
    this.expect(TokenType.RPAREN)
    
    const body = this.parseStatement()

    return {
      kind: "ForStmt",
      initializer,
      condition,
      update,
      body
    }
  }

  private parseFunctionStatement(): FunctionStmt {
    this.expect(TokenType.KEYWORD)
    const name = this.expect(TokenType.IDENTIFIER)
    this.expect(TokenType.LPAREN)
    
    const params: { name: Token; type?: Token }[] = []
    if (this.current().type !== TokenType.RPAREN) {
      const paramName = this.expect(TokenType.IDENTIFIER)
      let paramType: Token | undefined = undefined
      
      if (this.current().type === TokenType.COLON) {
        this.advance()
        paramType = this.advance()
      }
      
      params.push({ name: paramName, type: paramType })
      
      while (this.current().type === TokenType.COMMA) {
        this.advance()
        const pName = this.expect(TokenType.IDENTIFIER)
        let pType: Token | undefined = undefined
        
        if (this.current().type === TokenType.COLON) {
          this.advance()
          pType = this.advance()
        }
        
        params.push({ name: pName, type: pType })
      }
    }
    
    this.expect(TokenType.RPAREN)

    let returnType: Token | undefined = undefined
    if (this.current().type === TokenType.COLON) {
      this.advance()
      let typeToken = this.advance()
      
      if (this.current().type === TokenType.LBRACKET) {
        this.advance()
        this.expect(TokenType.RBRACKET)
        returnType = { ...typeToken, value: typeToken.value + '[]' }
      } else {
        returnType = typeToken
      }
    }

    const body = this.parseBlockStatement()

    return {
      kind: "FunctionStmt",
      name,
      params,
      returnType,
      body
    }
  }

  private parseReturnStatement(): ReturnStmt {
    this.expect(TokenType.KEYWORD)
    
    let value: Expr | undefined = undefined
    const currentType = this.current().type
    const isStatementTerminator = 
      currentType === TokenType.SEMICOLON ||
      currentType === TokenType.RBRACE ||
      currentType === TokenType.EOF ||
      (currentType === TokenType.KEYWORD && ['val', 'const', 'if', 'while', 'for', 'func', 'return', 'else'].includes(this.current().value as string))
    
    if (!isStatementTerminator) {
      value = this.parseExpression()
    }

    if (this.current().type === TokenType.SEMICOLON) {
      this.advance()
    }

    return {
      kind: "ReturnStmt",
      value
    }
  }

  private parseVariableDeclaration(): VarStmt {
    const keyword = this.advance()
    const kind = keyword.value === 'const' ? 'const' : 'val'

    const name = this.expect(TokenType.IDENTIFIER)

    let typeAnnotation: Token | null = null
    if (this.current().type === TokenType.COLON) {
      this.advance()
      
      let typeToken = this.advance()
      
      if (this.current().type === TokenType.LBRACKET) {
        this.advance()
        this.expect(TokenType.RBRACKET)
        typeAnnotation = { ...typeToken, value: typeToken.value + '[]' }
      } else {
        typeAnnotation = typeToken
      }
    }

    let initializer: Expr | undefined = undefined
    if (this.current().type === TokenType.ASSIGN) {
      this.advance()
      initializer = this.parseExpression()
    }

    if (this.current().type === TokenType.SEMICOLON) {
      this.advance()
    }

    if (kind === 'const' && initializer === undefined) {
      throw ErrorMessages.constWithoutInitializer(name.value as string, name)
    }

    return {
      kind: "VarStmt",
      type: kind,
      typeAnnotation,
      name,
      initializer
    }
  }

  private parseExpressionStatement(): ExpressionStmt {
    const expression = this.parseExpression()

    if (this.current().type === TokenType.SEMICOLON) {
      this.advance()
    }

    return {
      kind: "ExpressionStmt",
      expression
    }
  }

  /*
  =====================================
  Expressions - Pratt Parser
  =====================================
  */

  private parseExpression(minPrecedence: number = 0): Expr {
    let left = this.parsePrefix()

    while (true) {
      const operator = this.current()
      
      const statementTerminators = [
        TokenType.EOF,
        TokenType.SEMICOLON,
        TokenType.RBRACE,
        TokenType.RPAREN,
        TokenType.RBRACKET,
        TokenType.COMMA,
      ]
      
      if (statementTerminators.includes(operator.type)) {
        break
      }

      if (operator.type === TokenType.KEYWORD && 
          ['val', 'const', 'if', 'while', 'for', 'func', 'return', 'else'].includes(operator.value as string)) {
        break
      }

      const operatorPrecedence = this.getPrecedence(operator.type)

      if (operatorPrecedence < minPrecedence) {
        break
      }

      this.advance()

      if (operator.type === TokenType.ASSIGN) {
        if (!this.isValidLValue(left)) {
          const token = this.getTokenFromExpr(left)
          throw ErrorMessages.invalidAssignment(token)
        }
        const right = this.parseExpression(operatorPrecedence - 1)
        left = {
          kind: "Assign",
          name: left,
          value: right
        } as Expr
        continue
      }

      if (operator.type === TokenType.LPAREN) {
        const args: Expr[] = []
        
        if (this.current().type !== TokenType.RPAREN) {
          args.push(this.parseExpression())
          
          while (this.current().type === TokenType.COMMA) {
            this.advance()
            args.push(this.parseExpression())
          }
        }
        
        this.expect(TokenType.RPAREN)
        
        left = {
          kind: "Call",
          callee: left,
          args
        }
        continue
      }

      if (operator.type === TokenType.DOT) {
        const property = this.expect(TokenType.IDENTIFIER)
        left = {
          kind: "Member",
          object: left,
          property
        }
        continue
      }

      if (operator.type === TokenType.LBRACKET) {
        const index = this.parseExpression()
        this.expect(TokenType.RBRACKET)
        left = {
          kind: "Index",
          object: left,
          index
        }
        continue
      }

      const nextMinPrecedence = operatorPrecedence
      const right = this.parseExpression(nextMinPrecedence)

      left = {
        kind: operator.type === TokenType.AND || operator.type === TokenType.OR
          ? "Logical"
          : "Binary",
        left,
        operator,
        right
      }
    }

    return left
  }

  private parsePrefix(): Expr {
    const token = this.current()

    const unexpectedTokenTypes = [
      TokenType.SEMICOLON,
      TokenType.EOF,
      TokenType.RBRACE,
      TokenType.RPAREN,
      TokenType.RBRACKET,
      TokenType.COMMA,
    ]

    if (unexpectedTokenTypes.includes(token.type as TokenType)) {
      throw ErrorMessages.expectedExpression(token)
    }

    switch (token.type) {
      case TokenType.NUMBER:
      case TokenType.STRING:
      case TokenType.BOOLEAN:
      case TokenType.NULL:
        return this.parseLiteral()

      case TokenType.IDENTIFIER:
        return this.parseIdentifier()

      case TokenType.LPAREN:
        return this.parseGroup()

      case TokenType.LBRACKET:
        return this.parseArray()

      case TokenType.MINUS:
      case TokenType.NOT:
        return this.parseUnary()

      default:
        throw ErrorMessages.expectedExpression(token)
    }
  }

  private parseArray(): ArrayExpr {
    this.expect(TokenType.LBRACKET)
    
    const elements: Expr[] = []
    if (this.current().type !== TokenType.RBRACKET) {
      elements.push(this.parseExpression())
      
      while (this.current().type === TokenType.COMMA) {
        this.advance()
        elements.push(this.parseExpression())
      }
    }
    
    this.expect(TokenType.RBRACKET)
    
    return {
      kind: "Array",
      elements
    }
  }

  /*
  =====================================
  Prefix Expressions
  =====================================
  */

  private parseLiteral(): Expr {
    const token = this.advance()

    return {
      kind: "Literal",
      value: token.value
    }
  }

  private parseIdentifier(): IdentifierExpr {
    const token = this.advance()

    return {
      kind: "Identifier",
      name: token
    }
  }

  private parseGroup(): Expr {
    this.expect(TokenType.LPAREN)
    const expr = this.parseExpression()
    this.expect(TokenType.RPAREN)

    return {
      kind: "Group",
      expression: expr
    }
  }

  private parseUnary(): Expr {
    const operator = this.advance()
    const right = this.parseExpression(7)

    return {
      kind: "Unary",
      operator,
      right
    }
  }

  /*
  =====================================
  Utilities
  =====================================
  */

  private isValidLValue(expr: Expr): boolean {
    switch (expr.kind) {
      case "Identifier":
      case "Member":
      case "Index":
        return true
      default:
        return false
    }
  }

  private getTokenFromExpr(expr: Expr): Token {
    switch (expr.kind) {
      case "Identifier":
        return expr.name
      case "Binary":
      case "Logical":
        return expr.operator
      case "Unary":
        return expr.operator
      case "Member":
        return expr.property
      case "Group":
        return this.getTokenFromExpr(expr.expression)
      case "Array":
        if (expr.elements.length > 0) {
          return this.getTokenFromExpr(expr.elements[0])
        }
        return { type: TokenType.EOF, value: null, line: 0, column: 0 }
      case "Index":
        return this.getTokenFromExpr(expr.object)
      case "Call":
        return this.getTokenFromExpr(expr.callee)
      case "Assign":
        return this.getTokenFromExpr(expr.name)
      default:
        return { type: TokenType.NUMBER, value: 0, line: 0, column: 0 }
    }
  }

  private isEOF(): boolean {
    return this.current().type === TokenType.EOF
  }
}
