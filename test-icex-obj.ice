const isVissible = false

const styles = {color: "red", padding: 10, backgroundColor: "#ff44ff"}

func app(): web {
  const name = NavigatorAPI.question("Name: ")

  return (
    <div style={ styles } vissible={ !isVissible }>
        Hello { name }
    </div>
  )
}
