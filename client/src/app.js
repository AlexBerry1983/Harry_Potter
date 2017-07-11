import React from 'react';
import ReactDOM from 'react-dom';
import CharactersContainer from './container/CharactersContainer.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <CharactersContainer/>,
    document.getElementById('app')
  );
});