import React from 'react'
import { Card, Col, Input, Row, Button } from 'reactstrap'
import styles from '../../assets/scss/modules/Search.module.scss'

export const Search = (props) => {

  const handleSelect = ({ target }) => {
    props.selectSymptom(target.value)
  }

  const handleRemoveSelectedSymptoms = (id) => {
    props.removeSelectedSymptom(id)
  }

  const renderSymptomsList = () => {
    return props.symptoms.map((symptom) => {
      return <option key={symptom.id} value={symptom.id}>{symptom.name}</option>
    })
  }

  const renderSelectedSymptoms = () => {
    return props.selectedSymptoms.map((symptom) => {
      return (
        <button key={symptom.id} size="sm" className={`${styles.selected} me-2 mb-2 py-1 px-2 rounded-3`} onClick={() => handleRemoveSelectedSymptoms(symptom.id)}>
          <span>{symptom.name}</span>
          <i className="ms-1 bi bi-x-lg"></i>
        </button>
      )
    })
  }

  return (
    <Card body className={`${styles.container} mb-3 rounded-3`}>
      <Row className="mb-3">
        <Col lg={4}>
          <Input type="text" placeholder="Find clinics by name, symptoms..." />
        </Col>
        <Col lg={3}>
          <select className="form-select" aria-label="Default select example">
            <option value="">Choose an area</option>
            <option value="ampang">Ampang</option>
            <option value="gombak">Gombak</option>
            <option value="petaling jaya">Petaling Jaya</option>
            <option value="puchong">Puchong</option>
          </select>
        </Col>
        <Col lg={3}>
          <select className="form-select" aria-label="Default select example" onChange={handleSelect} defaultValue="">
            <option value="" disabled>Select symptoms</option>
            {renderSymptomsList()}
          </select>
        </Col>
        <Col lg={2}>
          <Button color="primary" className={styles.button}>Find Clinics</Button>
        </Col>
      </Row>
      {props.selectedSymptoms.length > 0 && <p className="mb-1" style={{ fontSize: '0.8rem' }}>Selected Symptoms:</p>}
      <div>
        {renderSelectedSymptoms()}
      </div>
    </Card >
  )
}
