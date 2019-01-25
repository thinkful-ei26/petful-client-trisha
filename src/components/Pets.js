import React from 'react';

export default function Pet(props) {
  const { adoptPet } = props;

  return (
  <div>
    <section className="pet">
      <h2>{adoptPet.name}</h2>
      <img src={adoptPet.imageURL} alt={adoptPet.imageDescription} />
        <div className="pet-description">
        <dl>
          <dt>Sex</dt>
          <dd>{adoptPet.sex}</dd>

          <dt>Age</dt>
          <dd>{adoptPet.age}</dd>

          <dt>Breed</dt>
          <dd>{adoptPet.breed}</dd>

          <dt>Story</dt>
          <dd>{adoptPet.story}</dd>
        </dl>
      <button type="button" onClick={adoptPet}>Adopt</button>
      </div> 
    </section>
    </div>
  )
}