import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import { db } from "./firebase";

export const getPatients = async () => {
  let patientsRef = collection(db, "pacientes");
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
  const patientsRef = collection(db, "pacientes");
  const patientDoc = doc(patientsRef, id);
  const docSnapshot = await getDoc(patientDoc);

  if (docSnapshot.exists()) {
    const data = docSnapshot.data();
    console.log(data);
    return { code: 200, msg: data };
  } else {
    return { code: 500, msg: `No se encontró el paciente con ID ${id}` };
  }
};

export const addPatient = async (patient) => {
  if (patient) {
    let result = await addDoc(collection(db, "pacientes"), patient);
    if (result && result.type === "document") {
      return { code: 200, id: result.id };
    } else {
      return { code: 500, msg: "Error al añadir paciente" };
    }
  }
};

export const deletePatient = async (id) => {
  let patientRef = collection(db, "pacientes");
  await deleteDoc(doc(patientRef, id));
  return { code: 200, msg: "Paciente eliminada correctamente" };
};
