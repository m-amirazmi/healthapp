import React from 'react'
import { Card, Col, Input, Row, Button } from 'reactstrap'
import styles from '../../assets/scss/modules/Search.module.scss'

export const Search = () => {
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
          <select className="form-select" aria-label="Default select example">
            <option value="" disabled>Symptoms</option>
            <option value="ampang">Demam</option>
            <option value="gombak">Sakit Pale</option>
            <option value="petaling jaya">Sakit Perot</option>
            <option value="puchong">Pening2</option>
          </select>
        </Col>
        <Col lg={2}>
          <Button color="secondary" className={styles.button}>Find Clinics</Button>
        </Col>
      </Row>
      <div>
        <Button size="sm" className={`${styles.selected} me-2 rounded-3`}>
          <span>Demam</span>
          <i className="ms-1 bi bi-x-lg"></i>
        </Button>
        <Button size="sm" className={`${styles.selected} me-2 rounded-3`}>
          <span>Demam</span>
          <i className="ms-1 bi bi-x-lg"></i>
        </Button>
        <Button size="sm" className={`${styles.selected} me-2 rounded-3`}>
          <span>Demam</span>
          <i className="ms-1 bi bi-x-lg"></i>
        </Button>
        <Button size="sm" className={`${styles.selected} me-2 rounded-3`}>
          <span>Demam</span>
          <i className="ms-1 bi bi-x-lg"></i>
        </Button>
      </div>
    </Card>
  )
}
