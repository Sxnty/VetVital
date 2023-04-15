import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
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
      /*       console.log(document); */
      return document;
    });
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
