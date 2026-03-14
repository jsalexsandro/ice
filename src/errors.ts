import { Token } from "./lexer"

export class IceError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "IceError"
  }
}

export class ParserError extends IceError {
  constructor(message: string, token?: Token) {
    const location = token ? ` at line ${token.line}, column ${token.column}` : ""
    super(`Parser Error: ${message}${location}`)
    this.name = "ParserError"
  }
}

export const ErrorMessages = {
  constWithoutInitializer: (name: string, token: Token) =>
    new ParserError(`Constant '${name}' must be initialized`, token),

  unexpectedToken: (expected: string, got: Token) =>
    new ParserError(`Expected ${expected} but got '${got.value}'`, got),

  invalidType: (type: string, token: Token) =>
    new ParserError(`Invalid type '${type}'`, token),

  expectedExpression: (got: Token) =>
    new ParserError(`Expected expression but got '${got.type}'`, got),
}
