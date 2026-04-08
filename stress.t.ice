// ========================
// TYPES + ARRAYS + OBJECTS
// ========================

val deepArray: int[][][][] = [
    [[[1]], [[2]]],
    [[[3]], [[4]]]
]

val deepObject = {
    a: {
        b: {
            c: {
                d: {
                    e: {
                        f: [1, 2, 3, {x: 10, y: [20, 30]}]
                    }
                }
            }
        }
    }
}

// ========================
// EXPRESSIONS (PRECEDENCE)
// ========================

val complexExpr =
    10 + 20 * 30 / 5 - 2 + 
    (40 * (2 + 3)) +
    (a && b || c && d) ? 
    (x ?? y ?? z) :
    (a + b * c - d / e)

// ========================
// FUNCTIONS
// ========================

func compute(a: int, b: int[][]): int[][] {
    val result: int[][] = []

    for (val i = 0; i < b.length; i = i + 1) {
        for (val j = 0; j < b[i].length; j = j + 1) {
            result[i][j] = (b[i][j] + a) * (a - b[i][j])
        }
    }

    return result
}

// ========================
// NESTED LOOPS
// ========================

for (val i = 0; i < 10; i = i + 1) {
    for (val j = 0; j < 10; j = j + 1) {
        for (val k = 0; k < 10; k = k + 1) {
            if (i == j && j == k) {
                continue
            }

            if (i + j + k > 20) {
                break
            }
        }
    }
}

// ========================
// CLASS STRESS
// ========================

class Engine {
    static count: int = 0

    constructor(public name: string, private power: int) {
        Engine.count = Engine.count + 1
    }

    start(): bool {
        return true
    }
}

class Car extends Engine {

    private wheels: int = 4

    constructor(public brand: string) {
        super(brand, 100)
    }

    drive(): string {
        return "Driving " + this.brand
    }

    render(): string {
        return <div class="car">
            <h1>{this.brand}</h1>
            <p>{this.drive()}</p>
        </div>
    }
}

// ========================
// NEW + MEMBER + INDEX
// ========================

val car = new Car("Ice")

car.brand = "Ice Lang"

val first = deepArray[0][0][0][0]
val nestedProp = deepObject.a.b.c.d.e.f[3].y[1]

// ========================
// TRY CATCH STRESS
// ========================

try {
    try {
        try {
            throw new Error("deep")
        } catch (e: Error) {
            throw e
        }
    } catch (e) {
        throw e
    }
} catch (e) {
    print(e)
} finally {
    print("done")
}

// ========================
// ICEX STRESS
// ========================

val ui = <div class="app">
    <header>
        <h1>{"Ice Lang"}</h1>
    </header>
    <main>
        <section>
            <ul>
                <li>{1 + 2}</li>
                <li>{car.brand}</li>
                <li>{compute(10, [[1,2],[3,4]])}</li>
            </ul>
        </section>
    </main>
    <footer>
        <button onclick={handleClick}>
            Click
        </button>
    </footer>
</div>

// ========================
// ASSIGNMENT STRESS
// ========================

deepObject.a.b.c.d.e.f[3].x = 999
deepArray[0][0][0][0] = 100

// ========================
// LOGICAL STRESS
// ========================

val logic =
    a && b ||
    c && (d || e) &&
    (f ?? g ?? h) &&
    (x > y ? true : false)

// ========================
// UNARY STRESS
// ========================

val unary =
    !!!true &&
    !!false ||
    -(10 + 20 * 30)

// ========================
// FINAL CLASS STRESS
// ========================

class Manager extends Car {

    constructor(name: string) {
        super(name)
    }

    create(): Car {
        return new Car("New")
    }

    render(): string {
        return <div>
            {super.render()}
            <span>Manager</span>
        </div>
    }
}

val manager = new Manager("Boss")

print(manager.render())