import { Token, TokenType, Lexer } from "./lexer"
import { Expr, Stmt, ImportStmt, ImportSpecifier, ExportStmt, ExportSpecifier } from "./ast"
import { ErrorMessages, formatError, printErrorFormatted } from "./errors"

export class Parser {
  private tokens: Token[]
  private position: number = 0
  private topLevel: boolean = true
  private errors: string[] = []
  private source: string = ""

  constructor(tokens: Token[], source: string = "") {
    this.tokens = tokens
    this.source = source
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
    [TokenType.QUESTION_QUESTION, 1.5],
    [TokenType.EQUAL, 3],
    [TokenType.NOT_EQUAL, 3],
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

  private isAccessModifier(token: Token): boolean {
    return (token.type === TokenType.KEYWORD || token.type === TokenType.IDENTIFIER) &&
      ['public', 'private', 'protected'].includes(token.value as string)
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

  private peekNext(): Token {
    return this.tokens[this.position + 2] ?? this.tokens[this.position + 1] ?? this.tokens[this.position]
  }

  private advance(): Token {
    const token = this.current()
    this.position++
    return token
  }

  private expect(type: TokenType): Token {
    const token = this.current()

    if (token.type !== type) {
      throw new Error(ErrorMessages.expectedToken(type, token).message)
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
    const previousTopLevel = this.topLevel
    this.topLevel = true
    this.clearErrors()

    let maxStatements = 1000
    while (!this.isEOF() && maxStatements > 0) {
      const startPosition = this.position
      
      try {
        const stmt = this.parseStatement()
        if (stmt) {
          statements.push(stmt)
        }
      } catch (e: any) {
        this.addError(e.message)
        
        // Conservative recovery:
        // 1. Advance past the error token
        // 2. Only do aggressive skip if stuck at same position
        
        if (!this.isEOF()) {
          this.advance()
        }
        
        // If still stuck (same position), do one more advance
        if (this.position === startPosition && !this.isEOF()) {
          this.advance()
        }
        
        // If STILL stuck, do aggressive skip to prevent infinite loop
        if (this.position === startPosition && !this.isEOF()) {
          const stmtKeywords = ['val', 'const', 'func', 'class', 'if', 'while', 'for', 'return', 'try', 'import', 'export', 'break', 'continue', 'throw', 'async']
          
          let skipped = 0
          while (!this.isEOF() && skipped < 20) {
            const tok = this.current()
            
            // Keyword at column 0 = new statement
            if (tok.type === TokenType.KEYWORD && stmtKeywords.includes(tok.value as string) && tok.column === 0) {
              break
            }
            
            // Semicolon = end of statement
            if (tok.type === TokenType.SEMICOLON) {
              this.advance()
              break
            }
            
            if (tok.type === TokenType.EOF) break
            
            this.advance()
            skipped++
          }
        }
      }
      maxStatements--
    }

    this.topLevel = previousTopLevel

    const result: any = {
      kind: "Program",
      body: statements
    }

    if (this.errors.length > 0) {
      result.errors = this.errors
    }

    return result
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
        return this.parseFunctionStatement(false)
      }
      if (token.value === 'async') {
        this.advance()
        if (this.current().value === 'func') {
          return this.parseFunctionStatement(true)
        }
        // Se não é func, pode ser async arrow - deixa expressãoidar como expressão
        // Volta uma posição para ser processado como expressão
        this.position--
        // Não faz nada aqui - vai cair para parseExpressionStatement
      }
      if (token.value === 'class') {
        return this.parseClassStatement()
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
      if (token.value === 'try') {
        return this.parseTryCatchStatement()
      }
      if (token.value === 'catch') {
        throw new Error(ErrorMessages.unexpectedCatch(token).message)
      }
      if (token.value === 'finally') {
        throw new Error(ErrorMessages.unexpectedFinally(token).message)
      }
      if (token.value === 'throw') {
        return this.parseThrowStatement()
      }
      if (token.value === 'import') {
        return this.parseImportStatement()
      }
      if (token.value === 'export') {
        return this.parseExportStatement()
      }
    }

    if (token.type === TokenType.LBRACE) {
      // Diferenciar entre Block Statement e Object Literal
      // Block: { stmt; stmt; } - após { vem keyword, identifier que não é key: value, etc
      // Object: { key: value, ... } - após { vem identifier seguido de :, ou spread
      const peek = this.peek()
      const isObjectLiteral = 
        (peek.type === TokenType.IDENTIFIER && this.peekNext().type === TokenType.COLON) ||
        peek.type === TokenType.SPREAD
      
      if (isObjectLiteral) {
        return this.parseExpressionStatement()
      }
      return this.parseBlockStatement()
    }

    return this.parseExpressionStatement()
  }

  private parseBlockStatement(): BlockStmt {
    this.expect(TokenType.LBRACE)
    
    const previousTopLevel = this.topLevel
    this.topLevel = false
    
    const statements: Stmt[] = []
    while (this.current().type !== TokenType.RBRACE && !this.isEOF()) {
      statements.push(this.parseStatement())
    }
    
    this.expect(TokenType.RBRACE)
    
    this.topLevel = previousTopLevel

    return {
      kind: "BlockStmt",
      statements
    }
  }

  private parseBodyOrEmpty(): BlockStmt {
    if (this.current().type === TokenType.LBRACE) {
      return this.parseBlockStatement()
    }
    return { kind: "BlockStmt", statements: [] }
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

  private parseFunctionStatement(isAsync: boolean = false): FunctionStmt {
    this.expect(TokenType.KEYWORD)
    const name = this.expect(TokenType.IDENTIFIER)
    this.expect(TokenType.LPAREN)
    
    const params: { name: Token; type?: Token; isRest?: boolean }[] = []
    if (this.current().type !== TokenType.RPAREN) {
      // Check for rest parameter (...args)
      let isRest = false
      let paramName: Token
      
      if (this.current().type === TokenType.SPREAD) {
        this.advance()
        isRest = true
        paramName = this.expect(TokenType.IDENTIFIER)
      } else {
        paramName = this.expect(TokenType.IDENTIFIER)
      }
      
      let paramType: Token | undefined = undefined
      
      if (this.current().type === TokenType.COLON) {
        this.advance()
        if (this.isValidType(this.current())) {
          let typeToken = this.advance()
          
          while (this.current().type === TokenType.LBRACKET) {
            this.advance()
            this.expect(TokenType.RBRACKET)
            typeToken = { ...typeToken, value: typeToken.value + '[]' }
          }
          paramType = typeToken
        } else {
          throw new Error(ErrorMessages.invalidType(this.current().value, this.current()).message)
        }
      }
      
      params.push({ name: paramName, type: paramType, isRest })
      
      while (this.current().type === TokenType.COMMA) {
        this.advance()
        
        // Check for rest parameter after comma
        let isRestParam = false
        let pName: Token
        
        if (this.current().type === TokenType.SPREAD) {
          this.advance()
          isRestParam = true
          pName = this.expect(TokenType.IDENTIFIER)
        } else {
          pName = this.expect(TokenType.IDENTIFIER)
        }
        
        let pType: Token | undefined = undefined
        
        if (this.current().type === TokenType.COLON) {
          this.advance()
          if (this.isValidType(this.current())) {
            let typeToken = this.advance()
            
            while (this.current().type === TokenType.LBRACKET) {
              this.advance()
              this.expect(TokenType.RBRACKET)
              typeToken = { ...typeToken, value: typeToken.value + '[]' }
            }
pType = typeToken
          } else {
            throw new Error(ErrorMessages.invalidType(this.current().value, this.current()).message)
          }
      }
      
      params.push({ name: pName, type: pType, isRest: isRestParam })
      }
    }
    
    this.expect(TokenType.RPAREN)

    let returnType: Token | undefined = undefined
    if (this.current().type === TokenType.COLON) {
      this.advance()
      let typeToken = this.advance()
      
      while (this.current().type === TokenType.LBRACKET) {
        this.advance()
        this.expect(TokenType.RBRACKET)
        typeToken = { ...typeToken, value: typeToken.value + '[]' }
      }
      returnType = typeToken
    }

    const body = this.parseBlockStatement()

    return {
      kind: "FunctionStmt",
      name,
      params,
      returnType,
      body,
      async: isAsync
    }
  }

  private parseClassStatement(): any {
    this.expect(TokenType.KEYWORD)
    const className = this.expect(TokenType.IDENTIFIER)
    
    let extendsName: string | undefined = undefined
    const isExtends = (t: any) => 
      (t.type === TokenType.KEYWORD || t.type === TokenType.IDENTIFIER) &&
      t.value === 'extends'
    if (isExtends(this.current())) {
      this.advance()
      extendsName = this.expect(TokenType.IDENTIFIER).value as string
    }
    
    this.expect(TokenType.LBRACE)
    
    const properties: any[] = []
    const methods: any[] = []
    
    while (this.current().type !== TokenType.RBRACE) {
      if (this.current().type === TokenType.EOF) {
        throw new Error(ErrorMessages.classNotClosed(className.value, this.current()).message)
      }
      
      let visibility: "public" | "private" | "protected" | null = null
      let isStatic = false
      
      const isAccessModifier = (t: any) => 
        (t.type === TokenType.KEYWORD || t.type === TokenType.IDENTIFIER) &&
        ['public', 'private', 'protected'].includes(t.value)
      
      const isStaticKeyword = (t: any) => 
        (t.type === TokenType.KEYWORD || t.type === TokenType.IDENTIFIER) &&
        t.value === 'static'
      
      if (isAccessModifier(this.current())) {
        visibility = this.current().value as any
        this.advance()
      }
      
      if (isStaticKeyword(this.current())) {
        isStatic = true
        this.advance()
      }
      
      const isConstructor = (t: any) =>
        (t.type === TokenType.KEYWORD || t.type === TokenType.IDENTIFIER) &&
        t.value === 'constructor'
      
      if (isConstructor(this.current())) {
        this.advance()
        this.expect(TokenType.LPAREN)
        
        const params: { name: Token; type?: Token; visibility?: string }[] = []
        if (this.current().type !== TokenType.RPAREN) {
          let paramVisibility: string | undefined = undefined
          
          if (this.isAccessModifier(this.current())) {
            paramVisibility = this.current().value as string
            this.advance()
          }
          
          const paramName = this.expect(TokenType.IDENTIFIER)
          let paramType: Token | undefined = undefined
          
          if (this.current().type === TokenType.COLON) {
            this.advance()
            if (this.isValidType(this.current())) {
              let typeToken = this.advance()
              
              while (this.current().type === TokenType.LBRACKET) {
                this.advance()
                this.expect(TokenType.RBRACKET)
                typeToken = { ...typeToken, value: typeToken.value + '[]' }
              }
              paramType = typeToken
            }
          }
          
          params.push({ name: paramName, type: paramType, visibility: paramVisibility })
          
          while (this.current().type === TokenType.COMMA) {
            this.advance()
            
            let pVisibility: string | undefined = undefined
            if (this.isAccessModifier(this.current())) {
              pVisibility = this.current().value as string
              this.advance()
            }
            
            const pName = this.expect(TokenType.IDENTIFIER)
            let pType: Token | undefined = undefined
            
            if (this.current().type === TokenType.COLON) {
              this.advance()
              if (this.isValidType(this.current())) {
                let typeToken = this.advance()
                
                while (this.current().type === TokenType.LBRACKET) {
                  this.advance()
                  this.expect(TokenType.RBRACKET)
                  typeToken = { ...typeToken, value: typeToken.value + '[]' }
                }
                pType = typeToken
              }
            }
            
            params.push({ name: pName, type: pType, visibility: pVisibility })
          }
        }
        
        this.expect(TokenType.RPAREN)
        const body = this.parseBodyOrEmpty()
        
        methods.push({
          name: 'constructor',
          params,
          body,
          visibility: 'public',
          isStatic: false
        })
        continue
      }
      
      if (this.current().type !== TokenType.IDENTIFIER) {
        this.advance()
        continue
      }
      
      const propName = this.advance()
      let propType: Token | undefined = undefined
      let initializer: Expr | undefined = undefined
      
      if (this.current().type === TokenType.COLON) {
        this.advance()
        if (this.isValidType(this.current())) {
          let typeToken = this.advance()
          
          while (this.current().type === TokenType.LBRACKET) {
            this.advance()
            this.expect(TokenType.RBRACKET)
            typeToken = { ...typeToken, value: typeToken.value + '[]' }
          }
          propType = typeToken
        }
      }
      
      if (this.current().type === TokenType.ASSIGN) {
        this.advance()
        initializer = this.parseExpression()
      }
      
      if (this.current().type === TokenType.SEMICOLON) {
        this.advance()
      }
      
      if (this.current().type === TokenType.LPAREN) {
        this.expect(TokenType.LPAREN)
        
        const params: { name: Token; type?: Token; visibility?: string; isRest?: boolean }[] = []
        if (this.current().type !== TokenType.RPAREN) {
          let paramVisibility: string | undefined = undefined
          
          if (this.isAccessModifier(this.current())) {
            paramVisibility = this.current().value as string
            this.advance()
          }
          
          let isRest = false
          let paramName: Token
          
          if (this.current().type === TokenType.SPREAD) {
            this.advance()
            isRest = true
            paramName = this.expect(TokenType.IDENTIFIER)
          } else {
            paramName = this.expect(TokenType.IDENTIFIER)
          }
          
          let paramType: Token | undefined = undefined
          
          if (this.current().type === TokenType.COLON) {
            this.advance()
            if (this.isValidType(this.current())) {
              let typeToken = this.advance()
              
              while (this.current().type === TokenType.LBRACKET) {
                this.advance()
                this.expect(TokenType.RBRACKET)
                typeToken = { ...typeToken, value: typeToken.value + '[]' }
              }
              paramType = typeToken
            }
          }
          
          params.push({ name: paramName, type: paramType, visibility: paramVisibility, isRest })
          
          while (this.current().type === TokenType.COMMA) {
            this.advance()
            
            let pVisibility: string | undefined = undefined
            if (this.isAccessModifier(this.current())) {
              pVisibility = this.current().value as string
              this.advance()
            }
            
            let isRestParam = false
            let pName: Token
            
            if (this.current().type === TokenType.SPREAD) {
              this.advance()
              isRestParam = true
              pName = this.expect(TokenType.IDENTIFIER)
            } else {
              pName = this.expect(TokenType.IDENTIFIER)
            }
            
            let pType: Token | undefined = undefined
            
            if (this.current().type === TokenType.COLON) {
              this.advance()
              if (this.isValidType(this.current())) {
                let typeToken = this.advance()
                
                while (this.current().type === TokenType.LBRACKET) {
                  this.advance()
                  this.expect(TokenType.RBRACKET)
                  typeToken = { ...typeToken, value: typeToken.value + '[]' }
                }
                pType = typeToken
              }
            }
            
            params.push({ name: pName, type: pType, visibility: pVisibility, isRest: isRestParam })
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
        
        methods.push({
          name: propName.value,
          params,
          returnType,
          body,
          visibility,
          isStatic
        })
      } else {
        properties.push({
          name: propName.value,
          type: propType,
          visibility,
          isStatic,
          initializer
        })
      }
    }
    
    this.expect(TokenType.RBRACE)
    
    return {
      kind: "Class",
      name: className.value,
      extends: extendsName,
      properties,
      methods
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
      (currentType === TokenType.KEYWORD && ['val', 'const', 'if', 'while', 'for', 'func', 'return', 'else', 'super', 'new', 'class', 'try', 'catch', 'finally', 'throw'].includes(this.current().value as string))
    
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

  private parseThrowStatement(): ThrowStmt {
    this.expect(TokenType.KEYWORD)
    
    const value = this.parseExpression()

    if (this.current().type === TokenType.SEMICOLON) {
      this.advance()
    }

    return {
      kind: "ThrowStmt",
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

  private parseTryCatchStatement(): TryCatchStmt {
    this.expect(TokenType.KEYWORD)
    
    const tryBlock = this.parseBlockStatement()
    
    const catchClauses: CatchClause[] = []
    while (this.current().type === TokenType.KEYWORD && this.current().value === 'catch') {
      this.advance()
      
      let param: { name: Token; type?: Token } | undefined
      if (this.current().type === TokenType.LPAREN) {
        this.advance()
        const name = this.expect(TokenType.IDENTIFIER)
        
        let paramType: Token | undefined
        if (this.current().type === TokenType.COLON) {
          this.advance()
          paramType = this.advance()
        }
        
        this.expect(TokenType.RPAREN)
        
        param = { name, type: paramType }
      }
      
      const catchBody = this.parseBlockStatement()
      catchClauses.push({ param, body: catchBody })
    }
    
    let finallyBlock: BlockStmt | undefined
    if (this.current().type === TokenType.KEYWORD && this.current().value === 'finally') {
      this.advance()
      finallyBlock = this.parseBlockStatement()
    }

    return {
      kind: "TryCatchStmt",
      tryBlock,
      catchClauses,
      finallyBlock
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
      
      while (this.current().type === TokenType.LBRACKET) {
        this.advance()
        this.expect(TokenType.RBRACKET)
        typeToken = { ...typeToken, value: typeToken.value + '[]' }
      }
      typeAnnotation = typeToken
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

      if (operator.type === TokenType.QUESTION_QUESTION) {
        this.advance()
        const right = this.parseExpression(2)
        left = {
          kind: "NullishCoalescing",
          left,
          right
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
          ['val', 'const', 'if', 'while', 'for', 'func', 'return', 'else', 'break', 'continue', 'this', 'super', 'new', 'class'].includes(operator.value as string)) {
        break
      }

      if (operator.type === TokenType.IDENTIFIER && 
          ['this', 'super', 'new', 'public', 'private', 'protected', 'static'].includes(operator.value as string)) {
        break
      }

      if (operator.type === TokenType.IDENTIFIER ||
          operator.type === TokenType.NUMBER ||
          operator.type === TokenType.STRING ||
          operator.type === TokenType.BOOLEAN ||
          operator.type === TokenType.NULL ||
          operator.type === TokenType.KEYWORD) {
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

      if (operator.type === TokenType.QUESTION_LPAREN) {
        const args: Expr[] = []
        
        if (this.current().type !== TokenType.RPAREN) {
          args.push(this.parseExpression())
          
          while (this.current().type === TokenType.COMMA) {
            this.advance()
            args.push(this.parseExpression())
          }
        }
        
        this.expect(TokenType.RPAREN)
        
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
      case TokenType.BOOLEAN:
      case TokenType.NULL:
        return this.parseLiteral()
        
      case TokenType.STRING:
        if (this.peek().type === TokenType.LBRACE) {
          return this.parseTemplateLiteral()
        }
        return this.parseLiteral()

      case TokenType.IDENTIFIER:
        if (token.value === 'super') {
          this.advance()
          return { kind: "Super" }
        }
        if (this.peek().type === TokenType.ARROW) {
          return this.parseArrowFunctionNoParens()
        }
        return this.parseIdentifier()

      case TokenType.KEYWORD:
        if (token.value === 'this') {
          this.advance()
          return { kind: "This" }
        }
        if (token.value === 'super') {
          this.advance()
          return { kind: "Super" }
        }
        if (token.value === 'new') {
          this.advance()
          const nameToken = this.expect(TokenType.IDENTIFIER)
          const callee: Expr = { kind: "Identifier", name: nameToken }
          this.expect(TokenType.LPAREN)
          const args: Expr[] = []
          if (this.current().type !== TokenType.RPAREN) {
            args.push(this.parseExpression())
            while (this.current().type === TokenType.COMMA) {
              this.advance()
              args.push(this.parseExpression())
            }
          }
          this.expect(TokenType.RPAREN)
          return { kind: "New", callee, args }
        }
        if (token.value === 'await') {
          this.advance()
          const expression = this.parseExpression()
          return { kind: "Await", expression }
        }
        if (token.value === 'async') {
          this.advance()
          // Verificar se é async arrow function
          if (this.current().type === TokenType.IDENTIFIER) {
            return this.parseArrowFunctionNoParens(true)
          }
          if (this.current().type === TokenType.LPAREN) {
            return this.parseArrowFunction(true)
          }
          throw new Error(ErrorMessages.expectedIdentifierOrParen(token).message)
        }
        throw ErrorMessages.expectedExpression(token)

      case TokenType.LPAREN:
        return this.parseGroup()

      case TokenType.LBRACE:
        if (this.peek().type === TokenType.TEMPLATE_MIDDLE) {
          return this.parseTemplateLiteral()
        }
        return this.parseObjectLiteral()

      case TokenType.LBRACKET:
        return this.parseArray()

      case TokenType.SPREAD:
        return this.parseSpread()

      case TokenType.PLUS:
      case TokenType.MINUS:
      case TokenType.NOT:
        return this.parseUnary()

      case TokenType.LESS_THAN:
        if (this.peek().type === TokenType.IDENTIFIER) {
          return this.parseIcexElement()
        }
        throw ErrorMessages.expectedExpression(token)

      case TokenType.TEMPLATE_STRING:
        return this.parseTemplateLiteral()

      case TokenType.STRING:
        return this.parseTemplateLiteral()

      default:
        throw ErrorMessages.expectedExpression(token)
    }
  }

  private parseTemplateLiteral(): TemplateLiteralExpr {
    const quasis: string[] = []
    const expressions: (Expr | null)[] = []
    
    while (this.current().type !== TokenType.EOF) {
      if (this.current().type === TokenType.STRING) {
        quasis.push(this.advance().value as string)
        expressions.push(null)
        continue
      }
      
      if (this.current().type === TokenType.LBRACE) {
        quasis.push('')
        this.advance()
        
        if (this.current().type === TokenType.TEMPLATE_MIDDLE) {
          const exprStr = this.advance().value as string
          const tempLexer = new Lexer(exprStr, false)
          const tempTokens = tempLexer.tokenize()
          const tempParser = new Parser(tempTokens)
          const expr = tempParser.parseExpression()
          expressions.push(expr)
        } else if (this.current().type !== TokenType.RBRACE) {
          const expr = this.parseExpression()
          expressions.push(expr)
        } else {
          expressions.push(null)
        }
        
        if (this.current().type === TokenType.RBRACE) {
          this.advance()
        }
        continue
      }
      
      break
    }
    
    return {
      kind: "TemplateLiteral",
      quasis,
      expressions
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

  private parseObjectLiteral(): Expr {
    const properties: { key: string | null; value: Expr }[] = []

    // Deve começar com LBRACE
    this.expect(TokenType.LBRACE)
    
    while (this.current().type !== TokenType.RBRACE) {
      // Handle spread: ...obj
      if (this.current().type === TokenType.SPREAD) {
        this.advance()
        const argument = this.parseExpression()
        properties.push({ key: null, value: { kind: "Spread", argument } })
        
        if (this.current().type === TokenType.COMMA) {
          this.advance()
        } else if (this.current().type !== TokenType.RBRACE) {
          break
        }
        continue
      }
      
      const keyToken = this.expect(TokenType.IDENTIFIER)
      
      if (this.current().type === TokenType.COLON) {
        this.advance()
        const value = this.parseExpression()
        properties.push({ key: keyToken.value as string, value })
      } else {
        const valueExpr: Expr = { kind: "Identifier", name: keyToken }
        properties.push({ key: keyToken.value as string, value: valueExpr })
      }

      if (this.current().type === TokenType.COMMA) {
        this.advance()
      } else {
        break
      }
    }
    
    this.expect(TokenType.RBRACE)

    return {
      kind: "Object",
      properties
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
    const lparenPos = this.position
    this.expect(TokenType.LPAREN)
    
    if (this.isArrowFunctionStart()) {
      const isAsync = lparenPos > 0 && this.tokens[lparenPos - 1].type === TokenType.KEYWORD && this.tokens[lparenPos - 1].value === 'async'
      return this.parseArrowFunction(isAsync)
    }
    
    const expr = this.parseExpression()
    this.expect(TokenType.RPAREN)

    return {
      kind: "Group",
      expression: expr
    }
  }

  private isArrowFunctionStart(): boolean {
    const startPos = this.position
    
    if (this.current().type === TokenType.RPAREN) {
      this.advance()
      const isArrow = this.current().type === TokenType.ARROW
      this.position = startPos
      return isArrow
    }
    
    if (this.current().type === TokenType.KEYWORD && this.current().value === 'async') {
      this.advance()
      if (this.current().type === TokenType.RPAREN || this.current().type === TokenType.IDENTIFIER || this.current().type === TokenType.LPAREN) {
        this.position = startPos
        return true
      }
      this.position = startPos
      return false
    }
    
    if (this.current().type !== TokenType.IDENTIFIER) {
      this.position = startPos
      return false
    }
    
    this.advance()
    
    if (this.current().type === TokenType.COLON) {
      this.position = startPos
      return true
    }
    
    if (this.current().type === TokenType.COMMA) {
      this.position = startPos
      return true
    }
    
    if (this.current().type === TokenType.RPAREN) {
      this.advance()
      const isArrow = this.current().type === TokenType.ARROW
      this.position = startPos
      return isArrow
    }
    
    this.position = startPos
    return false
  }

  private parseArrowFunction(isAsync: boolean = false): ArrowFunctionExpr {
    if (isAsync) {
      this.advance()
    }
    
    const params: { name: Token; type?: Token; isRest?: boolean }[] = []
    let returnType: Token | undefined
    
    if (this.current().type !== TokenType.RPAREN) {
      while (true) {
        let isRest = false
        let nameToken: Token
        
        if (this.current().type === TokenType.SPREAD) {
          this.advance()
          isRest = true
          nameToken = this.expect(TokenType.IDENTIFIER)
        } else {
          nameToken = this.expect(TokenType.IDENTIFIER)
        }
        
        if (this.current().type === TokenType.COLON) {
          this.advance()
          returnType = this.current()
          this.advance()
          
          while (this.current().type === TokenType.LBRACKET) {
            this.advance()
            this.expect(TokenType.RBRACKET)
          }
        }
        
        params.push({ name: nameToken, type: returnType, isRest })
        returnType = undefined
        
        if (this.current().type !== TokenType.COMMA) {
          break
        }
        this.advance()
      }
    }
    
    this.expect(TokenType.RPAREN)
    
    if (this.current().type === TokenType.COLON) {
      this.advance()
      returnType = this.current()
      this.advance()
      
      while (this.current().type === TokenType.LBRACKET) {
        this.advance()
        this.expect(TokenType.RBRACKET)
      }
    }
    
    this.expect(TokenType.ARROW)
    
    let body: Expr | Stmt
    
    if (this.current().type === TokenType.LBRACE) {
      body = this.parseBlockStatement()
    } else {
      body = this.parseExpression()
    }
    
    return {
      kind: "ArrowFunction",
      params,
      returnType,
      body,
      async: isAsync
    }
  }

  private parseArrowFunctionNoParens(isAsync: boolean = false): any {
    const nameToken = this.advance()
    
    this.expect(TokenType.ARROW)
    
    let body: Expr | Stmt
    
    if (this.current().type === TokenType.LBRACE) {
      body = this.parseBlockStatement()
    } else {
      body = this.parseExpression()
    }
    
    return {
      kind: "ArrowFunction",
      params: [{ name: nameToken }],
      body,
      async: isAsync
    }
  }

  private parseSpread(): Expr {
    this.advance() // consume '...'
    const argument = this.parseExpression(8) // higher precedence than unary
    return {
      kind: "Spread",
      argument
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

  // Error Recovery
  private addError(message: string): void {
    if (this.errors.includes(message)) {
      return
    }

    let token = this.current()
    let usePrevious = false

    if ((!token || token.line === 0) && this.position > 0) {
      token = this.tokens[this.position - 1]
      usePrevious = true
    }

    if (this.source && token && token.line > 0) {
      const formatted = formatError(message, token, this.source)
      this.errors.push(printErrorFormatted(formatted))
    } else {
      const loc = usePrevious && token 
        ? ` (after '${token.value}')` 
        : token?.line !== undefined ? ` at line ${token.line}, column ${token.column}` : ''
      this.errors.push(`error: ${message}${loc}`)
    }
  }

  private hasError(): boolean {
    return this.errors.length > 0
  }

  private getErrors(): string[] {
    return [...this.errors]
  }

  private clearErrors(): void {
    this.errors = []
  }

  private synchronize(): void {
    const stmtKeywords = ['val', 'const', 'func', 'class', 'if', 'while', 'for', 'return', 'try', 'import', 'export', 'break', 'continue', 'throw', 'async']
    
    while (!this.isEOF()) {
      const token = this.current()
      
      // Keyword at start of line - might be new statement
      if (token.type === TokenType.KEYWORD && stmtKeywords.includes(token.value as string) && token.column === 0) {
        return
      }
      
      // Semicolon - consume and return
      if (token.type === TokenType.SEMICOLON) {
        this.advance()
        return
      }
      
      // EOF
      if (token.type === TokenType.EOF) {
        return
      }
      
      // Skip
      this.advance()
    }
  }

  // Robust error recovery method
  private skipToSafePoint(): void {
    const stmtKeywords = ['val', 'const', 'func', 'class', 'if', 'while', 'for', 'return', 'try', 'import', 'export', 'break', 'continue', 'throw', 'async']
    
    // Skip tokens until safe point:
    // 1. Semicolon
    // 2. Keyword at column 0 (likely new statement)
    // 3. EOF
    
    while (!this.isEOF()) {
      const token = this.current()
      
      // Semicolon - consume and return
      if (token.type === TokenType.SEMICOLON) {
        this.advance()
        return
      }
      
      // Keyword at start of line - might be new valid statement
      if (token.type === TokenType.KEYWORD && stmtKeywords.includes(token.value as string) && token.column === 0) {
        return
      }
      
      // EOF
      if (token.type === TokenType.EOF) {
        return
      }
      
      // Skip token
      this.advance()
    }
  }

  // Old method - keep for compatibility
  private skipToNextLine(errorLine: number): void {
    const stmtKeywords = ['val', 'const', 'func', 'class', 'if', 'while', 'for', 'return', 'try', 'import', 'export', 'break', 'continue', 'throw', 'async']
    
    // Aggressive recovery: skip until guaranteed clean state
    // Only stop at semicolon (clean boundary) or EOF
    
    while (!this.isEOF()) {
      const token = this.current()
      
      // Keyword on column 0 is NOT safe - it might be another broken statement
      // So we skip ALL keywords to avoid getting stuck
      if (token.type === TokenType.KEYWORD && stmtKeywords.includes(token.value as string)) {
        this.advance()
        continue
      }
      
      // Only stop at semicolon (clean statement end)
      if (token.type === TokenType.SEMICOLON) {
        this.advance()
        return
      }
      
      // EOF
      if (token.type === TokenType.EOF) {
        return
      }
      
      // Keep skipping
      this.advance()
    }
  }

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
        throw new Error(ErrorMessages.invalidCloseTag(tag, closeTagToken.value as string, closeTagToken).message)
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
      
      case TokenType.ARROW:
        throw new Error(ErrorMessages.unexpectedArrow(token).message)

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
        
        const isObjectLiteral = (
          (this.current().type === TokenType.KEYWORD && 
           ['val', 'const'].includes(this.current().value as string)) ||
          this.current().type === TokenType.LBRACE ||
          this.current().type === TokenType.IDENTIFIER
        ) && this.peek().type === TokenType.COLON

        let expr: Expr
        if (isObjectLiteral) {
          expr = this.parseObjectLiteral()
        } else {
          expr = this.parseExpression()
          this.expect(TokenType.RBRACE)
        }
        
        children.push({ kind: "IcexExpression", expression: expr })
        continue
      }

      if (token.type === TokenType.GREATER_THAN) {
        break
      }

      if (token.type === TokenType.EOF) {
        throw new Error(ErrorMessages.tagNotClosed(parentTag, token).message)
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

  private parseImportStatement(): ImportStmt {
    if (!this.topLevel) {
      const token = this.current()
      throw new Error(ErrorMessages.importNotTopLevel(token).message)
    }
    
    this.expect(TokenType.KEYWORD)
    
    let source = ''
    let specifiers: ImportSpecifier[] | undefined = undefined
    let alias: string | undefined = undefined
    
    if (this.current().type === TokenType.LBRACE) {
      this.advance()
      specifiers = []
      
      while (this.current().type !== TokenType.RBRACE && !this.isEOF()) {
        const nameToken = this.expect(TokenType.IDENTIFIER)
        let name = nameToken.value as string
        let specAlias: string | undefined = undefined
        
        if (this.current().type === TokenType.KEYWORD && this.current().value === 'as') {
          this.advance()
          const aliasToken = this.expect(TokenType.IDENTIFIER)
          specAlias = aliasToken.value as string
        }
        
        specifiers.push({ kind: "ImportSpecifier", name, alias: specAlias })
        
        if (this.current().type === TokenType.COMMA) {
          this.advance()
        } else if (this.current().type !== TokenType.RBRACE) {
          break
        }
      }
      
      this.expect(TokenType.RBRACE)
      
      if (this.current().type === TokenType.KEYWORD && this.current().value === 'from') {
        this.advance()
        const fromToken = this.expect(TokenType.IDENTIFIER)
        source = fromToken.value as string
        
        while (this.current().type === TokenType.DOT) {
          this.advance()
          const nextToken = this.expect(TokenType.IDENTIFIER)
          source += '.' + nextToken.value
        }
      }
    } else {
      const firstToken = this.expect(TokenType.IDENTIFIER)
      source = firstToken.value as string
      
      while (this.current().type === TokenType.DOT) {
        this.advance()
        const nextToken = this.expect(TokenType.IDENTIFIER)
        source += '.' + nextToken.value
      }
      
      if (this.current().type === TokenType.KEYWORD && this.current().value === 'as') {
        this.advance()
        const aliasToken = this.expect(TokenType.IDENTIFIER)
        alias = aliasToken.value as string
      }
    }
    
    if (this.current().type === TokenType.SEMICOLON) {
      this.advance()
    }
    
    return { kind: "ImportStmt", source, specifiers, alias }
  }

  private parseExportStatement(): Stmt {
    if (!this.topLevel) {
      const token = this.current()
      throw new Error(ErrorMessages.exportNotTopLevel(token).message)
    }
    
    this.expect(TokenType.KEYWORD)
    
    if (this.current().type === TokenType.EOF || 
        (this.current().type === TokenType.SEMICOLON)) {
      throw new Error(ErrorMessages.exportMissingSpecifiers(this.current()).message)
    }
    
    if (this.current().value === 'val' || this.current().value === 'const') {
      const stmt = this.parseVariableDeclaration()
      stmt.exported = true
      return stmt
    }
    
    if (this.current().value === 'func') {
      const stmt = this.parseFunctionStatement()
      stmt.exported = true
      return stmt
    }
    
    if (this.current().value === 'class') {
      const stmt = this.parseClassStatement()
      stmt.exported = true
      return stmt
    }
    
    let specifiers: ExportSpecifier[] | undefined = undefined
    
    if (this.current().type === TokenType.LBRACE) {
      this.advance()
      specifiers = []
      
      while (this.current().type !== TokenType.RBRACE && !this.isEOF()) {
        let name = ''
        
        if (this.current().type === TokenType.IDENTIFIER) {
          name = this.advance().value as string
        } else if (this.current().type === TokenType.KEYWORD) {
          name = this.advance().value as string
        } else {
          throw new Error(ErrorMessages.expectedIdentifierOrKeyword(this.current(), this.current().type).message)
        }
        
        let specAlias: string | undefined = undefined
        
        if (this.current().type === TokenType.KEYWORD && this.current().value === 'as') {
          this.advance()
          if (this.current().type === TokenType.IDENTIFIER) {
            specAlias = this.advance().value as string
          } else if (this.current().type === TokenType.KEYWORD) {
            specAlias = this.advance().value as string
          }
        }
        
        specifiers.push({ kind: "ExportSpecifier", name, alias: specAlias })
        
        if (this.current().type === TokenType.COMMA) {
          this.advance()
        } else if (this.current().type !== TokenType.RBRACE) {
          break
        }
      }
      
      this.expect(TokenType.RBRACE)
    }
    
    if (this.current().type === TokenType.SEMICOLON) {
      this.advance()
    }
    
    return { kind: "ExportStmt", specifiers }
  }
}
