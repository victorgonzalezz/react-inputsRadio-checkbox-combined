// import { useState } from 'react';
import Radio from './Radio';
import Checkbox from './Checkbox';
// import data from '../data.json';

const radioOptions = [
  { label: 'Salad', id: 1},
  { label: 'Steak', id: 2},
  { label: 'Cuscus', id: 3},
];

const checkboxOptions = [
  { label: 'Football', id: 1},
  { label: 'Futevolei', id: 2},
  { label: 'Volei', id: 3},
];
const nomeDoJogo = "jogo"
console.log(radioOptions)

function App() {

  return (
    <>
      <p>Primeira pergunta: </p>
        {radioOptions.map(({ label, id }) => (
          <Radio
            key={id}
            id={id}
            name={nomeDoJogo}
            label={label}
          />
        ))}

      <p>Segunda Pergunta: </p>
        {checkboxOptions.map(({ label, id }) => (
          <Checkbox
            key={id}
            id={id}
            name={id}
            label={label}
          />
        ))}
    </>
  );
}

export default App;
