import { useEffect, useState } from "react";
import API from "../../utils/apis";

export const useClinics = () => {
  const [isLoad, setIsLoad] = useState(1);
  const [clinics, setClinics] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedClinic, setSelectedClinic] = useState({});

  useEffect(() => {
    const getAll = async () => {
      setIsLoad(1);

      const clinicsList = await getClinics();
      const symptomsList = await getSymptoms();

      setClinics(clinicsList);
      setSymptoms(symptomsList);
      setIsLoad(0);
    };
    getAll();
  }, []);

  const getClinics = async () => {
    const response = await fetch(API.clinics).then((d) => d.json());
    return response;
  };

  const getSymptoms = async () => {
    const response = await fetch(API.symptoms).then((d) => d.json());
    return response;
  };

  const selectSymptom = (id) => {
    const findExisting = selectedSymptoms.find((s) => s.id === id);
    if (findExisting) return;

    const copySelectedSymptoms = [...selectedSymptoms];
    const findSymptom = symptoms.find((s) => s.id === id);
    copySelectedSymptoms.push(findSymptom);
    setSelectedSymptoms(copySelectedSymptoms);
  };

  const selectClinic = (clinic) => {
    setSelectedClinic(clinic);
  };

  const removeSelectedSymptom = (id) => {
    const findExisting = selectedSymptoms.find((s) => s.id === id);
    const copySelectedSymptoms = [...selectedSymptoms];

    if (findExisting) {
      const removedSymptom = copySelectedSymptoms.filter((s) => s.id !== id);
      setSelectedSymptoms(removedSymptom);
    }
  };

  return {
    isLoad,
    clinics,
    symptoms,
    selectedClinic,
    selectedSymptoms,
    selectSymptom,
    selectClinic,
    removeSelectedSymptom,
  };
};
