import React from 'react'

export const CharacterDetails = (props) =>{
  if(!props.character) return null
    
  return(
    <div>
      <h3>Character details</h3>
      <p>Name: {props.character.name}</p>

      <h3>About them</h3>  
      <ul>
        <li>House: {props.character.house}</li>
        <li>Ancestry: {props.character.ancestry}</li>
        <li>Actor/Actress: {props.character.actor}</li>
        <img src={props.character.image} />
      </ul>
    </div>
    )

}
