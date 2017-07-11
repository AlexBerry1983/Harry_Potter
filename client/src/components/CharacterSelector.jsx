import React from 'react'
import CharacterDetails from '../components/CharacterDetails.jsx'

class CharacterSelector extends React.Component {

  constructor(props) {
    super(props),
    this.state = {
      selectedIndex: undefined
    }
  }

  handleChange(event) {
    const newIndex = event.target.value
    this.setState({selectedIndex: newIndex})

    const selectedCharacter = this.props.characters[newIndex]
    this.props.selectCharacter(selectedCharacter)
  }

  render() {
    const options = this.props.characters.map((character,index) => {
      return <option value={index} key={index}>{character.name}</option>
    })

    return(
      <select id="characters" value={this.state.selectedIndex} onChange={this.handleChange.bind(this)}>{options}</select>
      )
  }

}

export default CharacterSelector;