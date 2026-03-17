// ICEX - BASSIC GRAMMAR

const name = "Potter"

val head = <header>Hello world</header>
val headers = (
    <header>
        <text color="blue">
            Ola, { name }!
        </text>
    </header>
)

const myTag =  <tag number={ 10 }/>