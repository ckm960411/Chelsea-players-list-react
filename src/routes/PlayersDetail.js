function PlayersDetail(props) {
  const { id, number, name, nameTag, position, birthData, birthPlace } = props.location.state
  console.log(props)
  return (
    <div>
      <img src={`../../images/${nameTag}.png`} alt={name}/>
      <h1>{name}, {number}, {position}</h1>
    </div>
  )
}

export default PlayersDetail