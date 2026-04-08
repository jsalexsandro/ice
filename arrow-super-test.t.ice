// ============================================
// Andromeda — Arrow Function Super Test
// ============================================

// 1. Arrow Simples
val double = x => x * 2
val identity = x => x
val negative = x => -x
val not = x => !x

// 2. Multiplos Parâmetros
val add = (a, b) => a + b
val complex = (a, b, c) => a + b * c
val compare = (a, b) => a > b

// 3. Tipagem
val typed = (x: int) => x * 2
val typedMulti = (a: int, b: int) => a + b
val typedReturn = (x: int): int => x * 2

// 4. Arrow Com Bloco
val block = x => {
    val y = x * 2
    return y
}

val multi = (a, b) => {
    val sum = a + b
    val result = sum * 2
    return result
}

// 5. Arrow Dentro de Arrow
val nested = x => y => x + y
val deep = a => b => c => a + b + c

// 6. Arrow Como Argumento
val mapped = items.map(x => x * 2)
val filtered = items.filter(x => x > 10)
val reduced = data.reduce((acc, x) => acc + x, 0)

// 7. Arrow Com ICEX
val html = items.map(item => <div>{item}</div>)
val list = () => <ul>{items.map(x => <li>{x}</li>)}</ul>

// 8. Arrow Com Ternário
val abs = x => x > 0 ? x : -x
val check = x => x ? "yes" : "no"

// 9. Arrow Com Logical
val testAnd = x => x && x.value
val testOr = x => x || "default"

// 10. Arrow Com Nullish
val safe = x => x ?? "default"

// 11. Arrow Com Array
val create = () => [1, 2, 3]
val mapArr = arr => arr.map(x => x * 2)

// 12. Arrow Com Object (Shorthand)
val obj = x => ({ value: x })
val user = (name, age) => ({ name, age })
val config = { name, age }

// 13. Arrow Com Member
val getName = user => user.name
val deep = user => user.profile.address.city

// 14. Arrow Com Index
val first = arr => arr[0]
val nested = arr => arr[0][1]

// 15. Arrow Com New
val createUser = name => new User(name)
val build = () => new App()

// 16. Arrow Com Try
val safeParse = x => {
    try {
        return parse(x)
    } catch {
        return null
    }
}

// 17. Arrow Em Classe
class Test {
    method() {
        val fn = x => x * 2
        return fn(10)
    }
}

// 18. Arrow Com Loop
val process = arr => {
    for (val i = 0; i < arr.length; i = i + 1) {
        arr[i] = arr[i] * 2
    }
    return arr
}

// 19. Arrow Retornando Arrow
val curry = a => b => c => a + b + c

// 20. Arrow Sem Parâmetros
val random = () => 42
val empty = () => {}

// 21. Precedence
val prec1 = x => x + 1 * 2
val prec2 = x => (x + 1) * 2
val prec3 = x => x > 10 ? x * 2 : x / 2

// 22. Arrow + Call Chain
val chained = x => x.map(y => y * 2).filter(y => y > 10)

// 23. Arrow + Assignment
val assign = x => {
    val y = x * 2
    y = y + 1
    return y
}

// 25. Edge Cases
val edge1 = x=>x
val edge2 = (x)=>x
val edge3 = ( x ) => x
val edge4 = (x,y)=>x+y
val edge5 = () => ({a:1})

// 27. Nested + Everything
val brutal = data => {
    return data
        .filter(x => x.active)
        .map(x => ({
            name: x.name,
            render: () => <div>{x.name}</div>
        }))
}

// 28. Arrow + Class + ICEX + Try
val factory = name => {
    try {
        return new App(() => <div>{name}</div>)
    } catch {
        return null
    }
}

// 30. Ultimate Test
val ultimate = data => data
    .filter(x => x.enabled)
    .map(x => ({
        name: x.name,
        render: () => (
            <div>
                {x.items.map(item => (
                    <span>{item}</span>
                ))}
            </div>
        )
    }))
    .reduce((acc, x) => acc + x.name, "")
