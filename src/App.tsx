import React from 'react';
import './App.css';
import { CardPokemon } from './components/card/cardPokemon';

const App: React.FC = () => {
  return (
    <div className="App">
      <CardPokemon />
    </div>
  );
}

export default App;
