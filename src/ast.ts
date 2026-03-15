import { Token } from "./lexer"

export type Expr =
  | BinaryExpr
  | LiteralExpr
  | GroupExpr
  | UnaryExpr
  | LogicalExpr
  | IdentifierExpr
  | AssignExpr
  | CallExpr
  | ArrayExpr
  | MemberExpr
  | IndexExpr

export interface BinaryExpr {
  kind: "Binary"
  left: Expr
  operator: Token
  right: Expr
}

export interface LiteralExpr {
  kind: "Literal"
  value: any
}

export interface GroupExpr {
  kind: "Group"
  expression: Expr
}

export interface UnaryExpr {
  kind: "Unary"
  operator: Token
  right: Expr
}

export interface LogicalExpr {
  kind: "Logical"
  left: Expr
  operator: Token
  right: Expr
}

export interface IdentifierExpr {
  kind: "Identifier"
  name: Token
}

export interface AssignExpr {
  kind: "Assign"
  name: Expr
  value: Expr
}

export interface CallExpr {
  kind: "Call"
  callee: Expr
  args: Expr[]
}

export interface ArrayExpr {
  kind: "Array"
  elements: Expr[]
}

export interface MemberExpr {
  kind: "Member"
  object: Expr
  property: IdentifierExpr
}

export interface IndexExpr {
  kind: "Index"
  object: Expr
  index: Expr
}

export type Stmt =
  | ExpressionStmt
  | BlockStmt
  | IfStmt
  | VarStmt
  | WhileStmt
  | ForStmt
  | BreakStmt
  | ContinueStmt
  | FunctionStmt
  | ReturnStmt

export interface ExpressionStmt {
  kind: "ExpressionStmt"
  expression: Expr
}

export interface BlockStmt {
  kind: "BlockStmt"
  statements: Stmt[]
}

export interface IfStmt {
  kind: "IfStmt"
  condition: Expr
  thenBranch: Stmt
  elseBranch?: Stmt
}

export interface WhileStmt {
  kind: "WhileStmt"
  condition: Expr
  body: Stmt
}

export interface ForStmt {
  kind: "ForStmt"
  initializer: Stmt | null
  condition: Expr
  update: Expr
  body: Stmt
}

export interface VarStmt {
  kind: "VarStmt"
  type: "val" | "const"
  typeAnnotation?: Token
  name: Token
  initializer?: Expr
}

export interface BreakStmt {
  kind: "BreakStmt"
}

export interface ContinueStmt {
  kind: "ContinueStmt"
}

export interface FunctionStmtParam {
  name: Token
  type?: Token
}

export interface FunctionStmt {
  kind: "FunctionStmt"
  name: Token
  params: FunctionStmtParam[]
  returnType?: Token
  body: BlockStmt
}

export interface ReturnStmt {
  kind: "ReturnStmt"
  value?: Expr
}
