import React from 'react';
import './index.css';

export default function Dashboard(props) {
  const { catToAdopt, dogToAdopt } = props;
  return (
    <main className="container">

    {/* ============= CAT ============= */ }
      <section className="cat">
        <h2>{catToAdopt.name}</h2>
        <img src={catToAdopt.imageURL} alt={catToAdopt.imageDescription} />
        <div className="pet-description">
        <dl>
          <dt>Sex</dt>
          <dd>{catToAdopt.sex}</dd>

          <dt>Age</dt>
          <dd>{catToAdopt.age}</dd>

          <dt>Breed</dt>
          <dd>{catToAdopt.breed}</dd>

          <dt>Story</dt>
          <dd>{catToAdopt.story}</dd>
        </dl>
        <button type="button">Adopt</button>
        </div>
      </section>

    {/* ============= DOG ============= */ }
      <section className="dog">
        <h2>{dogToAdopt.name}</h2>
        <img src={dogToAdopt.imageURL} alt={dogToAdopt.imageDescription} />
        <div className="pet-description">
        <dl>
          <dt>Sex</dt>
          <dd>{dogToAdopt.sex}</dd>

          <dt>Age</dt>
          <dd>{dogToAdopt.age}</dd>

          <dt>Breed</dt>
          <dd>{dogToAdopt.breed}</dd>

          <dt>Story</dt>
          <dd>{dogToAdopt.story}</dd>
        </dl>
        <button type="button">Adopt</button>
        </div>
      </section>
    </main>
  );
}