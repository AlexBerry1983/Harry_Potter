import React from 'react'
import CharacterSelector from '../components/CharacterSelector.jsx'
import {CharacterDetails} from '../components/CharacterDetails.jsx'


class CharactersContainer extends React.Component {
  //State: the list of characters, current character
  //Initially empty
  //Props: name, house, actor, image

  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      displayedCharacter: null
    };
  }

  componentDidMount(){
    const url = "https://hp-api.herokuapp.com/api/characters"
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = () => {
      if (request.status !== 200) return

        const jsonString = request.responseText
        const data = JSON.parse(jsonString)

        this.setState({characters: data, displayedCharacter: data[0]})
    }
    request.send();
  }

  setDisplayedCharacter(character) {
    this.setState({displayedCharacter: character})
  }

  render() {
    return(
      <div>
        <h3> Harry Potter Characters </h3>
          <CharacterSelector characters={this.state.characters} selectCharacter = {this.setDisplayedCharacter.bind(this)}/>
          <CharacterDetails character={this.state.displayedCharacter}/>
      </div>
      )
    
  }

}

export default CharactersContainer;