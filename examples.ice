val name: string = "Hello"
const age: int = 25
val isActive: bool = true
val nothing: null = null

val numbers: int[] = [1, 2, 3, 4, 5]
val strings: string[] = ["a", "b", "c"]
val mixed = [1, "two", true, null]

val matrix: int[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
val grid: string[][] = [["a", "b"], ["c", "d"]]
val empty3d: int[][][] = []

val user = {name: "John", age: 30}
val config = {color: "blue", size: 10, active: true}
val nested = {a: {b: {c: 1}}}

val Button = {
    color: {a: [1, 2, 3, "Good", false]},
    padding: 10
}

val styles = {
    color: "red",
    backgroundColor: "blue",
    margin: {top: 10, right: 20, bottom: 30, left: 40},
    sizes: [10, 20, 30],
    enabled: true
}

val data = {
    users: [
        {name: "John", age: 25},
        {name: "Jane", age: 30},
        {name: "Bob", age: 35}
    ],
    config: {
        theme: "dark",
        version: 1.0,
        settings: {autoSave: true, maxItems: 100}
    }
}

func greet(msg: string): string {
    return msg
}

func add(a: int, b: int): int {
    return a + b
}

func processMatrix(data: int[][]): int[] {
    val result: int[] = []
    for (val i = 0; i < data.length; i = i + 1) {
        val sum = 0
        for (val j = 0; j < data[i].length; j = j + 1) {
            sum = sum + data[i][j]
        }
        result[j] = sum
    }
    return result
}

func transpose(matrix: int[][]): int[][] {
    val rows = matrix.length
    val cols = matrix[0].length
    val result: int[][] = []
    for (val i = 0; i < cols; i = i + 1) {
        for (val j = 0; j < rows; j = j + 1) {
            result[i][j] = matrix[j][i]
        }
    }
    return result
}

func sum(numbers: int[]): int {
    val total = 0
    for (val i = 0; i < 10; i = i + 1) {
        total = total + i
    }
    return total
}

if (age > 18) {
    val message = "Adult"
}

if (isActive) {
    val status = "Online"
} else {
    val status = "Offline"
}

val i = 0
while (i < 10) {
    i = i + 1
}

for (val i = 0; i < 10; i = i + 1) {
    val item = items[i]
}

for (val i = 0; i < 10; i = i + 1) {
    if (i == 5) {
        break
    }
    if (i == 3) {
        continue
    }
}

val result = a ? b : c
val value = x > 0 ? x : -x

val expr = 10 + 5
val expr2 = 10 - 5
val expr3 = 10 * 5
val expr4 = 10 / 5

val comparison = a == b
val comparison2 = a != c
val comparison3 = a < b
val comparison4 = a > b

val logical = a && b
val logical2 = a || b

val nullish = nullableValue ?? "default"

val unary = -10
val unary2 = +10
val unary3 = !true

val call = greet("Hello")
val member = user.name
val index = numbers[0]
val chained = user.profile.address.city

val html = <div>Hello World</div>
val withAttr = <div id="app" class="container">Content</div>
val withExpr = <div>{name}</div>
val withObj = <div style={{color: "red", padding: 10}}>Text</div>
val nested = <ul><li>Item 1</li><li>Item 2</li></ul>
val selfClosing = <img src="photo.jpg"/>

val arr = [1, 2, 3]
arr[0] = 10

user.name = "Jane"
user.age = 31

val double = x => x * 2
val triple = x => x * 3

val add = (x, y) => x + y
val multiply = (a: int, b: int) => a * b

val process = (data: int[]) => {
    val sum = 0
    for (val i = 0; i < data.length; i = i + 1) {
        sum = sum + data[i]
    }
    return sum
}

val processSimple = (x: int) => {
    return x * 2
}

val increment = () => count + 1

val handler = event => handleClick(event)
val validator = (value: string) => value.length > 0

val numbers: int[] = [1, 2, 3, 4, 5]
val doubled = numbers.map(x => x * 2)
val filtered = numbers.filter(x => x > 2)

val htmlList = <ul>{items.map(item => <li>{item}</li>)}</ul>

val button = <button onClick={() => doSomething()}>Click</button>

val summed = numbers.reduce((acc, x) => acc + x, 0)

val config = {
    handler: (event) => handleEvent(event),
    validator: (value: string) => value.length > 0
}

break
continue

return
return value

try {
} catch (E: VeryERROR) {

} catch (Error) {

} finally {

}

throw new Error()
throw "Error"
throw FuncError()

class App extends SApp {
    constructor(){
        super()
    }
}

class Game  {
    constructor (public name)
}

val game = new Game("Snake Game")
print(game.name)

class Counter {
    static count: int = 0
    static instance: Counter
    
    constructor(public name: string, private age: int) {
        Counter.count = Counter.count + 1
    }
    
    static getCount(): int {
        return Counter.count
    }
    
    static create(name: string): Counter {
        return new Counter(name, 0)
    }
    
    getName(): string {
        return this.name
    }
    
    private increment() {
        Counter.count = Counter.count + 1
    }
}