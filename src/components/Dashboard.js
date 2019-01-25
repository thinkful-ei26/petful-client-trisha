import React from 'react';
import Pet from './Pet';
import '../index.css';

export default function Dashboard(props) {
  const { catToAdopt, dogToAdopt } = props;
  console.log('pet props:',props);
  return (
    <main className="container">
      <Pet pet={catToAdopt} onAdoptPet={() => console.log('clicked cat')} />
      <Pet pet={dogToAdopt} onAdoptPet={() => console.log('clicked dog')}/>
    </main>
  );
}