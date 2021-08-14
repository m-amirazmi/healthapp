import { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import { MainLayout } from '../layouts/MainLayout'
import { Appointment } from '../components/home/Appointment'
import { Search } from '../components/home/Search'
import { ClinicCard } from '../components/home/ClinicCard'
import API from '../utils/apis'

export const Clinics = () => {

  const [isLoad, setIsLoad] = useState(1)
  const [clinics, setClinics] = useState([])
  const [symptoms, setSymptoms] = useState([])
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const [selectedClinic, setSelectedClinic] = useState({})

  useEffect(() => {
    getAll()
  }, [])

  const getAll = async () => {
    setIsLoad(1)

    const clinicsList = await getClinics()
    const symptomsList = await getSymptoms()

    setClinics(clinicsList)
    setSymptoms(symptomsList)
    setIsLoad(0)
  }

  const getClinics = async () => {
    const response = await fetch(API.clinics).then((d) => d.json())
    return response
  }

  const getSymptoms = async () => {
    const response = await fetch(API.symptoms).then((d) => d.json())
    return response
  }

  const selectSymptom = (id) => {
    const findExisting = selectedSymptoms.find((s) => s.id === id)
    if (findExisting) return

    const copySelectedSymptoms = [...selectedSymptoms]
    const findSymptom = symptoms.find((s) => s.id === id)
    copySelectedSymptoms.push(findSymptom)
    setSelectedSymptoms(copySelectedSymptoms)
  }

  const selectClinic = (clinic) => {
    setSelectedClinic(clinic)
  }

  const removeSelectedSymptom = (id) => {
    const findExisting = selectedSymptoms.find((s) => s.id === id)
    const copySelectedSymptoms = [...selectedSymptoms]

    if (findExisting) {
      const removedSymptom = copySelectedSymptoms.filter((s) => s.id !== id)
      setSelectedSymptoms(removedSymptom)
    }
  }

  const renderClinicCard = () => {
    return clinics.map((clinic) => {
      const active = clinic.id === selectedClinic.id ? true : false
      return <ClinicCard key={clinic.id} active={active} clinic={clinic} symptoms={symptoms} selectClinic={selectClinic} />
    })
  }

  const renderContent = () => {
    if (isLoad) {
      return (
        <h1>Loading...</h1>
      )
    }
    if (!isLoad) {
      return (
        <Row className="gx-3">
          {renderClinicCard()}
        </Row>
      )
    }
  }

  return (
    <MainLayout>
      <Row>
        <Col lg={9}>
          <Search symptoms={symptoms} selectedSymptoms={selectedSymptoms} selectSymptom={selectSymptom} removeSelectedSymptom={removeSelectedSymptom} />
          {renderContent()}
        </Col>
        <Col lg={3}>
          <Appointment selectedClinic={selectedClinic} />
        </Col>
      </Row>
    </MainLayout>
  )
}
