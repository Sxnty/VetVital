import React from 'react';
import { GiSittingDog, GiEgyptianBird, GiCat } from "react-icons/gi";
import '../styles/components-styles/patientCard.scss';

function PatientCard({ name, owner, animal }) {
  const animalType = (type) => {
    switch (type) {
      case 'dog':
        return <GiSittingDog />;
        break;
      case 'bird':
        return <GiEgyptianBird />;
        break;
      case 'cat':
        return <GiCat />;
        break;
    }
  };
  return (
    <div className='patient__card'>
      {animalType(animal)}
      <div className='card__info'>
        <h1>{name}</h1>
        <h2>{owner}</h2>
      </div>
    </div>
  );
}

export default PatientCard;
