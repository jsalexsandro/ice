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
    [TokenType.QUESTION, 0],
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

  private isValidType(token: Token): boolean {
    const validTypes = ['int', 'float', 'bool', 'string', 'void', 'any']
    return validTypes.includes(token.value) || token.type === TokenType.IDENTIFIER
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
    return this.tokens[this.position + 1] ?? this.tokens[this.position]
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
      if (token.value === 'break') {
        return this.parseBreakStatement()
      }
      if (token.value === 'continue') {
        return this.parseContinueStatement()
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
    
    let initializer: Stmt | null = null
    if (this.current().type !== TokenType.SEMICOLON) {
      if (this.current().type === TokenType.KEYWORD && 
          (this.current().value === 'val' || this.current().value === 'const')) {
        initializer = this.parseVariableDeclaration()
      } else {
        initializer = this.parseExpressionStatement()
      }
    } else {
      this.advance()
    }
    
    if (this.current().type === TokenType.SEMICOLON) {
      this.advance()
    }
    
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
        if (this.isValidType(this.current())) {
          let typeToken = this.advance()
          
          if (this.current().type === TokenType.LBRACKET) {
            this.advance()
            this.expect(TokenType.RBRACKET)
            paramType = { ...typeToken, value: typeToken.value + '[]' }
          } else {
            paramType = typeToken
          }
        } else {
          throw new Error(`Invalid type '${this.current().value}' at line ${this.current().line}, column ${this.current().column}`)
        }
      }
      
      params.push({ name: paramName, type: paramType })
      
      while (this.current().type === TokenType.COMMA) {
        this.advance()
        const pName = this.expect(TokenType.IDENTIFIER)
        let pType: Token | undefined = undefined
        
        if (this.current().type === TokenType.COLON) {
          this.advance()
          if (this.isValidType(this.current())) {
            let typeToken = this.advance()
            
            if (this.current().type === TokenType.LBRACKET) {
              this.advance()
              this.expect(TokenType.RBRACKET)
              pType = { ...typeToken, value: typeToken.value + '[]' }
            } else {
              pType = typeToken
            }
          } else {
            throw new Error(`Invalid type '${this.current().value}' at line ${this.current().line}, column ${this.current().column}`)
          }
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

  private parseBreakStatement(): BreakStmt {
    this.expect(TokenType.KEYWORD)
    
    if (this.current().type === TokenType.SEMICOLON) {
      this.advance()
    }

    return {
      kind: "BreakStmt"
    }
  }

  private parseContinueStatement(): ContinueStmt {
    this.expect(TokenType.KEYWORD)
    
    if (this.current().type === TokenType.SEMICOLON) {
      this.advance()
    }

    return {
      kind: "ContinueStmt"
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

      if (operator.type === TokenType.QUESTION) {
        this.advance()
        const consequent = this.parseExpression(0)
        this.expect(TokenType.COLON)
        const alternate = this.parseExpression(0)
        left = {
          kind: "Conditional",
          condition: left,
          consequent,
          alternate
        }
        continue
      }
      
      const statementTerminators = [
        TokenType.EOF,
        TokenType.SEMICOLON,
        TokenType.RBRACE,
        TokenType.RPAREN,
        TokenType.RBRACKET,
        TokenType.COMMA,
        TokenType.COLON,
      ]
      
      if (statementTerminators.includes(operator.type)) {
        break
      }

      if (operator.type === TokenType.KEYWORD && 
          ['val', 'const', 'if', 'while', 'for', 'func', 'return', 'else', 'break', 'continue'].includes(operator.value as string)) {
        break
      }

      if (operator.type === TokenType.IDENTIFIER ||
          operator.type === TokenType.NUMBER ||
          operator.type === TokenType.STRING ||
          operator.type === TokenType.BOOLEAN ||
          operator.type === TokenType.NULL) {
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
        const token = this.current()
        if (token.type !== TokenType.IDENTIFIER && 
            token.type !== TokenType.KEYWORD &&
            token.type !== TokenType.BOOLEAN &&
            token.type !== TokenType.NULL) {
          throw Error(`Expected identifier or keyword after '.' but got '${token.type}'`)
        }
        const propertyToken = this.advance()
        left = {
          kind: "Member",
          object: left,
          property: {
            kind: "Identifier",
            name: propertyToken
          }
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

      if (operator.type === TokenType.LESS_THAN ||
          operator.type === TokenType.LESS_EQUAL ||
          operator.type === TokenType.GREATER_THAN ||
          operator.type === TokenType.GREATER_EQUAL ||
          operator.type === TokenType.EQUAL ||
          operator.type === TokenType.NOT_EQUAL) {
        const right = this.parseExpression(operatorPrecedence)
        left = {
          kind: "Binary",
          left,
          operator,
          right
        }
        continue
      }

      const nextMinPrecedence = operatorPrecedence + 1
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

      case TokenType.PLUS:
      case TokenType.MINUS:
      case TokenType.NOT:
        return this.parseUnary()

      case TokenType.LESS_THAN:
        if (this.peek().type === TokenType.IDENTIFIER) {
          return this.parseIcexElement()
        }
        throw ErrorMessages.expectedExpression(token)

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

  private parseIcexElement(): Expr {
    this.expect(TokenType.LESS_THAN)

    const tagToken = this.current()
    if (tagToken.type !== TokenType.IDENTIFIER && 
        (tagToken.type !== TokenType.KEYWORD || typeof tagToken.value !== "string")) {
      throw ErrorMessages.expectedExpression(tagToken)
    }
    const tag = this.advance().value as string

    const attributes = this.parseIcexAttributes()

    let isSelfClosing = false
    if (this.current().type === TokenType.SLASH) {
      this.advance()
      isSelfClosing = true
    }

    this.expect(TokenType.GREATER_THAN)

    const children: any[] = []
    if (!isSelfClosing) {
      const parsedChildren = this.parseIcexChildren(tag)
      children.push(...parsedChildren)
      this.expect(TokenType.LESS_THAN)
      this.expect(TokenType.SLASH)
      const closeTagToken = this.current()
      const closeTag = closeTagToken.type === TokenType.IDENTIFIER || 
                       (closeTagToken.type === TokenType.KEYWORD && typeof closeTagToken.value === "string")
        ? this.advance().value as string
        : null
      if (closeTag !== tag) {
        throw new Error(`Tag de fechamento incorreta: esperado </${tag}>, encontrado </${closeTagToken.value}>`)
      }
      this.expect(TokenType.GREATER_THAN)
    }

    return {
      kind: "IcexElement",
      tag,
      attributes,
      children,
      isSelfClosing
    }
  }

  private parseIcexAttributes(): any[] {
    const attributes: any[] = []

    while (this.current().type === TokenType.IDENTIFIER || 
           (this.current().type === TokenType.KEYWORD && typeof this.current().value === "string")) {
      let name = ""

      while (true) {
        const token = this.current()
        
        if (token.type === TokenType.IDENTIFIER || 
            (token.type === TokenType.KEYWORD && typeof token.value === "string")) {
          if (name !== "" && !name.endsWith("-")) {
            name += "-"
          }
          name += this.advance().value
        } else if (token.type === TokenType.MINUS) {
          if (name !== "" && !name.endsWith("-")) {
            name += this.advance().value
          } else {
            break
          }
        } else {
          break
        }
      }

      if (name === "") {
        break
      }

      let value: any = true

        if (this.current().type === TokenType.ASSIGN) {
          this.advance()

          if (this.current().type === TokenType.STRING) {
            value = this.advance().value
          } else if (this.current().type === TokenType.LBRACE) {
            this.advance()
            value = this.parseExpression(0)
            this.expect(TokenType.RBRACE)
          } else {
            throw ErrorMessages.expectedExpression(this.current())
          }
        }

      attributes.push({ name, value })
    }

    return attributes
  }

  private parseIcexAttributeValue(): Expr {
    const token = this.current()

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

  private parseIcexChildren(parentTag: string): any[] {
    const children: any[] = []
    let currentText = ""

    while (true) {
      const token = this.current()

      if (token.type === TokenType.LESS_THAN) {
        if (currentText !== "") {
          children.push({ kind: "IcexText", value: currentText })
          currentText = ""
        }

        const nextToken = this.peek()
        if (nextToken.type === TokenType.SLASH) {
          break
        }

        children.push(this.parseIcexElement())
        continue
      }

      if (token.type === TokenType.LBRACE) {
        if (currentText !== "") {
          children.push({ kind: "IcexText", value: currentText })
          currentText = ""
        }

        this.advance()
        const expr = this.parseExpression()
        this.expect(TokenType.RBRACE)
        children.push({ kind: "IcexExpression", expression: expr })
        continue
      }

      if (token.type === TokenType.GREATER_THAN) {
        break
      }

      if (token.type === TokenType.EOF) {
        throw new Error(`Tag ${parentTag} não fechada`)
      }

      if ((token.type === TokenType.IDENTIFIER || token.type === TokenType.NUMBER) && currentText !== "" && !currentText.endsWith(" ")) {
        currentText += " " + token.value
      } else {
        currentText += token.value
      }

      this.advance()
    }

    if (currentText !== "") {
      children.push({ kind: "IcexText", value: currentText })
    }

    return children
  }
}
