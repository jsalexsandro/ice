import { Lexer } from './src/lexer'
import { Parser } from './src/parser'

function test(name: string, code: string) {
    try {
        const tokens = new Lexer(code).tokenize()
        const ast = new Parser(tokens).parseProgram()
        console.log(`✅ ${name}`)
    } catch (e: any) {
        console.log(`❌ ${name}: ${e.message}`)
    }
}

console.log("=== Stress Testing Parser ===\n")

// Edge cases
test("Empty program", "")
test("Whitespace only", "   \n\t  ")
test("Comments", "// comment\n/* multi\nline */")

// Deep nesting
test("Deep nesting", `
func a() { func b() { func c() { func d() { return 1 } return d() } return c() } return b() } return a()
`)

// Many arguments
test("Many args", "func f(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) { }")

// Deep array
test("Deep array", "val x = [[[[[[[[[[[1]]]]]]]]]]]")

// Deep object
test("Deep object", "val x = {a:{b:{c:{d:{e:{f:{g:1}}}}}}}")

// Long chain
test("Long member chain", "val x = a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z")

// Long array index chain
test("Long index chain", "val x = a[0][1][2][3][4][5][6][7][8][9]")

// Try-catch deep nesting
test("Deep try-catch", `
try {
    try {
        try {
            throw "error"
        } catch (e) { }
    } catch (e) { }
} catch (e) { }
`)

// Class deep inheritance
test("Deep inheritance", `
class A { val a = 1 }
class B extends A { val b = 2 }
class C extends B { val c = 3 }
class D extends C { val d = 4 }
class E extends D { val e = 5 }
`)

// Many class methods
test("Many methods", `
class X {
    m1() { }
    m2() { }
    m3() { }
    m4() { }
    m5() { }
    m6() { }
    m7() { }
    m8() { }
    m9() { }
    m10() { }
}
`)

// Complex ICEX
test("Complex ICEX", `
val x = <div>
    <span>{a}</span>
    <ul>{items.map(i => <li>{i}</li>)}</ul>
    <section class="test" data-active={true}>
        {cond ? <a/> : <b/>}
    </section>
</div>
`)

// Mixed operators
test("Mixed operators", "val x = a + b * c - d / e % f")

// Complex ternary
test("Complex ternary", "val x = a ? b ? c ? d : e : f : g ? h : i")

// Assignment in expressions
test("Assignment in expression", "val x = (a = b) + (c = d)")

// Shadow variables
test("Shadow variables", `
{
    val x = 1
    {
        val x = 2
        {
            val x = 3
        }
    }
}
`)

console.log("\n=== Stress Test Complete ===")