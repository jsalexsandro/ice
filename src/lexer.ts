import { KEYWORDS } from "./keywords"

export enum TokenType {
  KEYWORD = 'KEYWORD',
  IDENTIFIER = 'IDENTIFIER',
  NUMBER = 'NUMBER',
  STRING = 'STRING',
  BOOLEAN = 'BOOLEAN',
  NULL = 'NULL',
  TYPE_INT = 'TYPE_INT',
  TYPE_FLOAT = 'TYPE_FLOAT',
  TYPE_BOOL = 'TYPE_BOOL',
  TYPE_STRING = 'TYPE_STRING',
  TYPE_VOID = 'TYPE_VOID',
  OPERATOR = 'OPERATOR',
  LPAREN = 'LPAREN',
  RPAREN = 'RPAREN',
  LBRACE = 'LBRACE',
  RBRACE = 'RBRACE',
  LBRACKET = 'LBRACKET',
  RBRACKET = 'RBRACKET',
  COMMA = 'COMMA',
  DOT = 'DOT',
  SEMICOLON = 'SEMICOLON',
  COLON = 'COLON',
  EQUAL = 'EQUAL',
  NOT_EQUAL = 'NOT_EQUAL',
  LESS_THAN = 'LESS_THAN',
  LESS_EQUAL = 'LESS_EQUAL',
  GREATER_THAN = 'GREATER_THAN',
  GREATER_EQUAL = 'GREATER_EQUAL',
  PLUS = 'PLUS',
  MINUS = 'MINUS',
  STAR = 'STAR',
  SLASH = 'SLASH',
  MODULO = 'MODULO',
  AND = 'AND',
  OR = 'OR',
  NOT = 'NOT',
  ASSIGN = 'ASSIGN',
  EOF = 'EOF',
  ERROR = 'ERROR',
}

export interface Token {
  type: TokenType;
  value: string | number | boolean | null;
  line: number;
  column: number;
}

export class Lexer {
  input: string
  position = 0
  readPosition = 0
  ch = ""
  line = 1
  column = 0

  constructor(input: string) {
    this.input = input
    this.column = -1
    this.readChar()
  }

  readChar() {
    this.position = this.readPosition
    this.ch = this.input[this.readPosition] || ""
    if (this.ch === '\n') {
      this.line++
      this.column = -1
    } else {
      this.column++
    }
    this.readPosition++
  }

  peek(): string {
    return this.input[this.readPosition] || ""
  }

  advance(): void {
    this.readChar()
  }

  consume(): string {
    const ch = this.ch
    this.readChar()
    return ch
  }

  skipWhitespace(): void {
    while (this.ch === ' ' || this.ch === '\t' || this.ch === '\n' || this.ch === '\r') {
      this.readChar()
    }
  }

  skipComment(): Token | null {
    const startColumn = this.column
    
    if (this.ch === '/' && this.peek() === '/') {
      while (this.ch !== '\n' && this.ch !== '') {
        this.readChar()
      }
      return null
    }

    if (this.ch === '/' && this.peek() === '*') {
      this.readChar()
      this.readChar()
      while (true) {
        if (this.ch === '') {
          return { type: TokenType.ERROR, value: 'unclosed comment', line: this.line, column: startColumn }
        }
        if (this.ch === '*' && this.peek() === '/') {
          this.readChar()
          this.readChar()
          break
        }
        this.readChar()
      }
      return null
    }

    return null
  }

  readNumber(): Token {
    let numStr = ''
    const startColumn = this.column

    while (this.ch >= '0' && this.ch <= '9') {
      numStr += this.ch
      this.readChar()
    }

    if (this.ch === '.') {
      numStr += this.ch
      this.readChar()

      if (this.ch < '0' || this.ch > '9') {
        return { type: TokenType.ERROR, value: 'invalid number', line: this.line, column: startColumn }
      }

      while (this.ch >= '0' && this.ch <= '9') {
        numStr += this.ch
        this.readChar()
      }

      if (this.ch === '.') {
        return { type: TokenType.ERROR, value: 'invalid number', line: this.line, column: startColumn }
      }

      return { type: TokenType.NUMBER, value: parseFloat(numStr), line: this.line, column: startColumn }
    }

    return { type: TokenType.NUMBER, value: parseInt(numStr, 10), line: this.line, column: startColumn }
  }

  readString(quote: string): Token {
    const startColumn = this.column
    let str = ''
    this.readChar()

    while (this.ch !== quote && this.ch !== '') {
      if (this.ch === '\n' && quote !== '`') {
        this.readChar()
        return { type: TokenType.ERROR, value: 'unclosed string', line: this.line, column: startColumn }
      }

      if (this.ch === '\\') {
        this.readChar()
        const escaped = this.escapeSequence(quote)
        if (escaped === null) {
          return { type: TokenType.ERROR, value: 'invalid escape sequence', line: this.line, column: startColumn }
        }
        str += escaped
        continue
      }

      str += this.ch
      this.readChar()
    }

    if (this.ch === '') {
      return { type: TokenType.ERROR, value: 'unclosed string', line: this.line, column: startColumn }
    }

    this.readChar()
    return { type: TokenType.STRING, value: str, line: this.line, column: startColumn }
  }

  escapeSequence(quote: string): string | null {
    switch (this.ch) {
      case '"':
        this.readChar()
        return '"'
      case "'":
        this.readChar()
        return "'"
      case '\\':
        this.readChar()
        return '\\'
      case 'n':
        this.readChar()
        return '\n'
      case 't':
        this.readChar()
        return '\t'
      case '`':
        this.readChar()
        return '`'
      default:
        return null
    }
  }

  readIdentifier(): Token {
    let ident = ''
    const startColumn = this.column

    while (this.isLetter(this.ch) || this.isDigit(this.ch)) {
      ident += this.ch
      this.readChar()
    }

    if (ident === 'true') {
      return { type: TokenType.BOOLEAN, value: true, line: this.line, column: startColumn }
    }

    if (ident === 'false') {
      return { type: TokenType.BOOLEAN, value: false, line: this.line, column: startColumn }
    }

    if (ident === 'null') {
      return { type: TokenType.NULL, value: null, line: this.line, column: startColumn }
    }

    if (ident === 'int') {
      return { type: TokenType.TYPE_INT, value: 'int', line: this.line, column: startColumn }
    }

    if (ident === 'float') {
      return { type: TokenType.TYPE_FLOAT, value: 'float', line: this.line, column: startColumn }
    }

    if (ident === 'bool') {
      return { type: TokenType.TYPE_BOOL, value: 'bool', line: this.line, column: startColumn }
    }

    if (ident === 'string') {
      return { type: TokenType.TYPE_STRING, value: 'string', line: this.line, column: startColumn }
    }

    if (ident === 'void') {
      return { type: TokenType.TYPE_VOID, value: 'void', line: this.line, column: startColumn }
    }

    const isKeyword = KEYWORDS.includes(ident)
    const type = isKeyword ? TokenType.KEYWORD : TokenType.IDENTIFIER

    return { type, value: ident, line: this.line, column: startColumn }
  }

  isLetter(ch: string): boolean {
    return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch === '_' || ch === '$'
  }

  isDigit(ch: string): boolean {
    return ch >= '0' && ch <= '9'
  }

  readOperator(): Token {
    const startColumn = this.column
    const ch = this.ch

    switch (ch) {
      case '=':
        this.readChar()
        if (this.ch === '=') {
          this.readChar()
          return { type: TokenType.EQUAL, value: '==', line: this.line, column: startColumn }
        }
        return { type: TokenType.ASSIGN, value: '=', line: this.line, column: startColumn }
      
      case '+':
        this.readChar()
        return { type: TokenType.PLUS, value: '+', line: this.line, column: startColumn }
      
      case '-':
        this.readChar()
        return { type: TokenType.MINUS, value: '-', line: this.line, column: startColumn }
      
      case '*':
        this.readChar()
        return { type: TokenType.STAR, value: '*', line: this.line, column: startColumn }
      
      case '/':
        this.readChar()
        return { type: TokenType.SLASH, value: '/', line: this.line, column: startColumn }
      
      case '%':
        this.readChar()
        return { type: TokenType.MODULO, value: '%', line: this.line, column: startColumn }
      
      case '<':
        this.readChar()
        if (this.ch === '=') {
          this.readChar()
          return { type: TokenType.LESS_EQUAL, value: '<=', line: this.line, column: startColumn }
        }
        return { type: TokenType.LESS_THAN, value: '<', line: this.line, column: startColumn }
      
      case '>':
        this.readChar()
        if (this.ch === '=') {
          this.readChar()
          return { type: TokenType.GREATER_EQUAL, value: '>=', line: this.line, column: startColumn }
        }
        return { type: TokenType.GREATER_THAN, value: '>', line: this.line, column: startColumn }
      
      case '!':
        this.readChar()
        if (this.ch === '=') {
          this.readChar()
          return { type: TokenType.NOT_EQUAL, value: '!=', line: this.line, column: startColumn }
        }
        return { type: TokenType.NOT, value: '!', line: this.line, column: startColumn }
      
      case '&':
        this.readChar()
        if (this.ch === '&') {
          this.readChar()
          return { type: TokenType.AND, value: '&&', line: this.line, column: startColumn }
        }
        return { type: TokenType.OPERATOR, value: '&', line: this.line, column: startColumn }
      
      case '|':
        this.readChar()
        if (this.ch === '|') {
          this.readChar()
          return { type: TokenType.OR, value: '||', line: this.line, column: startColumn }
        }
        return { type: TokenType.OPERATOR, value: '|', line: this.line, column: startColumn }
      
      case '(':
        this.readChar()
        return { type: TokenType.LPAREN, value: '(', line: this.line, column: startColumn }
      
      case ')':
        this.readChar()
        return { type: TokenType.RPAREN, value: ')', line: this.line, column: startColumn }
      
      case '{':
        this.readChar()
        return { type: TokenType.LBRACE, value: '{', line: this.line, column: startColumn }
      
      case '}':
        this.readChar()
        return { type: TokenType.RBRACE, value: '}', line: this.line, column: startColumn }
      
      case '[':
        this.readChar()
        return { type: TokenType.LBRACKET, value: '[', line: this.line, column: startColumn }
      
      case ']':
        this.readChar()
        return { type: TokenType.RBRACKET, value: ']', line: this.line, column: startColumn }
      
      case ',':
        this.readChar()
        return { type: TokenType.COMMA, value: ',', line: this.line, column: startColumn }
      
      case '.':
        this.readChar()
        return { type: TokenType.DOT, value: '.', line: this.line, column: startColumn }
      
      case ';':
        this.readChar()
        return { type: TokenType.SEMICOLON, value: ';', line: this.line, column: startColumn }
      
      case ':':
        this.readChar()
        return { type: TokenType.COLON, value: ':', line: this.line, column: startColumn }
      
      default:
        this.readChar()
        return { type: TokenType.ERROR, value: ch, line: this.line, column: startColumn }
    }
  }

  nextToken(): Token {
    this.skipWhitespace()

    if (this.ch === '') {
      return { type: TokenType.EOF, value: null, line: this.line, column: this.column }
    }

    if (this.isLetter(this.ch)) {
      return this.readIdentifier()
    }

    if (this.ch >= '0' && this.ch <= '9') {
      return this.readNumber()
    }

    if (this.ch === '"' || this.ch === "'" || this.ch === '`') {
      return this.readString(this.ch)
    }

    if (this.ch === '/') {
      const commentResult = this.skipComment()
      if (commentResult) {
        return commentResult
      }
      if (this.ch === '/') {
        return this.readOperator()
      }
      return this.nextToken()
    }

    return this.readOperator()
  }

  tokenize(): Token[] {
    const tokens: Token[] = []
    let token = this.nextToken()
    
    while (token.type !== 'EOF') {
      tokens.push(token)
      token = this.nextToken()
    }
    
    tokens.push(token)
    return tokens
  }
}
