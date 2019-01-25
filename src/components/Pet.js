import React from 'react';
import { fetchCat } from '../actions'

export default function Pet(props) {
  console.log('pet props:',props);
  const { pet, onAdoptPet } = props;
  
  return (
  <div className="container">
    <section className="pet">
    <h2>{pet.name}</h2>
    <img src={pet.imageURL} alt={pet.imageDescription} />
      <div className="pet-description">
      <dl>
        <dt>Sex</dt>
        <dd>{pet.sex}</dd>

        <dt>Age</dt>
        <dd>{pet.age}</dd>

        <dt>Breed</dt>
        <dd>{pet.breed}</dd>

        <dt>Story</dt>
        <dd>{pet.story}</dd>
      </dl>
    <button type="button" onClick={onAdoptPet}>Adopt</button>
    </div> 
  </section>
  </div>
  )
}