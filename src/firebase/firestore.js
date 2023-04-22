import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from './firebase';

export const getPatients = async () => {
  let patientsRef = collection(db, 'patients');
  const querySnapshot = await getDocs(patientsRef);
  if (querySnapshot && querySnapshot.docs) {
    const result = querySnapshot.docs.map((doc) => {
      let document = {
        id: doc.id,
        ...doc.data(),
      };
      return document;
    });
    console.log(result);
    return { code: 200, msg: result };
  } else {
    return { code: 500, msg: [] };
  }
};

export const getOnePatient = async (id) => {
  try {
    const patientsRef = collection(db, 'patients');
    const patientDoc = doc(patientsRef, id);
    const docSnapshot = await getDoc(patientDoc);
    if (!docSnapshot.exists()) {
      throw new Error(`No se encontro el paciente con el id ${id}`);
    } else {
      const data = docSnapshot.data();
      console.log(data);
      return { code: 200, msg: data };
    }
  } catch (error) {
    console.error(error);
    return { code: 404, msg: `Error buscado al paciente: ${error}` };
  }
};

const validatePatient = (patient) => {
  const { name, age, history, owner, animal } = patient;
  if (!name || !age || !history || !owner || !animal) {
    throw new Error(
      'Debe proporcionar todos los datos para añadir al paciente'
    );
  }
};

export const addPatient = async ({ name, age, history, owner, animal }) => {
  try {
    const patient = { name, age, history, owner, animal };
    validatePatient(patient);

    let patientRef = collection(db, 'patients');
    await addDoc(patientRef, patient);
    return { code: 200, msg: 'Paciente añadido correctamente' };
  } catch (error) {
    console.error(error);
    return { code: 500, msg: `Error añadiendo al paciente: ${error}` };
  }
};

export const deletePatient = async (id) => {
  try {
    const patientRef = doc(collection(db, 'patients'), id);
    let patientDoc = await getDoc(patientRef);
    if (!patientDoc.exists()) {
      throw new Error('No existe el paciente con el id proporcionado');
    }
    await deleteDoc(patientRef);
    return { code: 200, msg: 'Paciente eliminada correctamente' };
  } catch (error) {
    console.error(error);
    return { code: 500, msg: `Error eliminando al paciente: ${error}` };
  }
};

export const getPatientByName = async (name) => {
  const patientsRef = collection(db, 'patients');
  const q = query(patientsRef, where('name', '==', name));
  try {
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    if (data.length > 0) {
      return { data };
    } else {
      return {
        error: {
          code: 500,
          msg: 'No se encontro ningun documento con esos parametros',
        },
      };
    }
  } catch (error) {
    console.error(error);
    return { code: 500, msg: 'Ha ocurrido un error no especificado' };
  }
};
