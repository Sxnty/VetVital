import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsPersonAdd, BsSearch } from 'react-icons/bs';
import '../../styles/components-styles/patients.scss';
import { useState } from 'react';
import {
  addPatient,
  deletePatient,
  getOnePatient,
  getPatientByName,
  getPatients,
} from '../../firebase/firestore';
import PatientCard from '../PatientCard';
function Patients() {
  const [dataFiltered, setDataFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const inputHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await getPatientByName(search);
    setDataFiltered([result]);
  };

  return (
    <section className='hero__patients'>
      <div className='patients__top'>
        <h1>Pacientes.</h1>
        <div className='top__buttons'>
          <form className='input' onSubmit={submitHandler}>
            <BsSearch />
            <input
              type='search'
              placeholder='Nombre del dueño o mascota...'
              onChange={inputHandler}
            />
          </form>
          <button>
            <BsPersonAdd />
          </button>
        </div>
      </div>
      <div className='patients__list'>
        {dataFiltered && dataFiltered.length > 0 && !dataFiltered[0].error ? (
          dataFiltered[0].data.map(({ name, owner, id, animal }) => {
            if (name && owner) {
              return <PatientCard name={name} owner={owner} id={id} key={id} animal={animal}/>;
            } else {
              return null;
            }
          })
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </section>
  );
}

export default Patients;
