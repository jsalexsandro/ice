import { Token, TokenType } from "./lexer"

export interface IceError {
  message: string
  line: number
  column: number
  endColumn?: number
  source?: string
}

export interface IceErrorFormatted {
  file?: string
  line: number
  column: number
  endColumn?: number
  message: string
  snippet?: string
  marker?: string
}

export function formatError(
  message: string,
  token: Token,
  source: string,
  filename?: string
): IceErrorFormatted {
  const lines = source.split("\n")
  const line = token.line > 0 ? token.line - 1 : 0
  const codeLine = lines[line] || ""
  
  const startCol = token.column > 0 ? token.column - 1 : 0
  const endCol = token.value 
    ? startCol + String(token.value).length 
    : startCol + 1

  const marker = " ".repeat(startCol) + "^".repeat(Math.max(1, endCol - startCol))

  return {
    file: filename,
    line: token.line,
    column: token.column,
    endColumn: endCol,
    message,
    snippet: codeLine.trim(),
    marker
  }
}

export function printErrorFormatted(error: IceErrorFormatted): string {
  const location = error.file
    ? `${error.file}:${error.line}:${error.column}`
    : `line ${error.line}, column ${error.column}`

  let output = ` --> ${location}\n`
  output += `   |\n`
  output += ` ${error.line} | ${error.snippet}\n`
  output += `   | ${error.marker}\n`
  output += `   |\n`
  output += `error: ${error.message}`

  return output
}

export function printErrors(
  errors: (IceError | { message: string; line?: number; column?: number })[],
  source?: string,
  filename?: string
): string {
  if (errors.length === 0) return ""

  return errors.map(err => {
    const fakeToken: Token = {
      type: TokenType.EOF,
      value: "",
      line: err.line || 1,
      column: err.column || 1
    }
    const formatted = formatError(err.message, fakeToken, source || "", filename)
    return printErrorFormatted(formatted)
  }).join("\n\n")
}

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

  invalidAssignment: (token: Token) =>
    new ParserError(`Invalid assignment target`, token),

  importEmptySpecifiers: (token: Token) =>
    new ParserError(`Import specifiers cannot be empty. Use 'import module' without braces.`, token),

  importMissingFrom: (token: Token) =>
    new ParserError(`Expected 'from' after import specifiers`, token),

  importInvalidSpecifier: (token: Token) =>
    new ParserError(`Invalid import specifier. Expected identifier, got '${token.value}'`, token),

  importTrailingComma: (token: Token) =>
    new ParserError(`Trailing comma is not allowed in import specifiers`, token),

  importAsWithoutAlias: (token: Token) =>
    new ParserError(`'as' keyword must be followed by an alias identifier`, token),

  importMissingAlias: (token: Token) =>
    new ParserError(`Expected alias identifier after 'as' keyword`, token),

  unexpectedCatch: (token: Token) =>
    new ParserError(`Unexpected 'catch' without matching 'try'`, token),

  unexpectedFinally: (token: Token) =>
    new ParserError(`Unexpected 'finally' without matching 'try'`, token),

  invalidType: (type: string, token: Token) =>
    new ParserError(`Invalid type '${type}'`, token),

  classNotClosed: (name: string, token: Token) =>
    new ParserError(`Class '${name}' not closed`, token),

  expectedIdentifierOrParen: (token: Token) =>
    new ParserError(`Expected identifier or '(' after 'async'`, token),

  invalidCloseTag: (tag: string, got: string, token: Token) =>
    new ParserError(`Expected close tag </${tag}>, got </${got}>`, token),

  unexpectedArrow: (token: Token) =>
    new ParserError(`Unexpected arrow '=>' in attribute value`, token),

  tagNotClosed: (tag: string, token: Token) =>
    new ParserError(`Tag '${tag}' not closed`, token),

  importNotTopLevel: (token: Token) =>
    new ParserError(`Imports must be at top-level`, token),

  exportNotTopLevel: (token: Token) =>
    new ParserError(`Exports must be at top-level`, token),

  exportMissingSpecifiers: (token: Token) =>
    new ParserError(`Export requires at least one specifier or '{'`, token),

  expectedIdentifierOrKeyword: (token: Token, got: string) =>
    new ParserError(`Expected identifier or keyword for export, got '${got}'`, token),

  expectedToken: (expected: string, got: Token) =>
    new ParserError(`Expected token ${expected}, got '${got.type}'`, got),
}