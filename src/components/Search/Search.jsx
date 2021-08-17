import React from "react";
import { Card, Col, Input, Row, Button } from "reactstrap";
import styles from "./Search.module.scss";
import { useSearch } from "./useSearch";

export const Search = (props) => {
  const { handleRemoveSelectedSymptoms, handleSelect } = useSearch(props);

  const renderSymptomsList = () => {
    return props.symptoms.map((symptom) => {
      return (
        <option key={symptom.id} value={symptom.id}>
          {symptom.name}
        </option>
      );
    });
  };

  const renderSelectedSymptoms = () => {
    return props.selectedSymptoms.map((symptom) => {
      return (
        <button
          key={symptom.id}
          size="sm"
          className={`${styles.selected} me-2 mb-2 py-1 px-2 rounded-3`}
          onClick={() => handleRemoveSelectedSymptoms(symptom.id)}
        >
          <span>{symptom.name}</span>
          <i className="ms-1 bi bi-x-lg"></i>
        </button>
      );
    });
  };

  return (
    <Card
      body
      className={`${styles.container} px-4 border-0 shadow-sm mb-3 rounded-3`}
    >
      <Row className="my-3 gx-2">
        <Col xs={12} lg={4} className="mb-2 mb-lg-0">
          <Input
            bsSize="sm"
            type="text"
            placeholder="Find clinics by name, symptoms..."
          />
        </Col>
        <Col xs={6} lg={3} className="mb-2 mb-lg-0">
          <select
            className="form-select form-select-sm"
            aria-label="Default select example"
          >
            <option value="">Choose an area</option>
            <option value="ampang">Ampang</option>
            <option value="gombak">Gombak</option>
            <option value="petaling jaya">Petaling Jaya</option>
            <option value="puchong">Puchong</option>
          </select>
        </Col>
        <Col xs={6} lg={3} className="mb-2 mb-lg-0">
          <select
            className="form-select form-select-sm"
            aria-label="Default select example"
            onChange={handleSelect}
            defaultValue=""
          >
            <option value="" disabled>
              Select symptoms
            </option>
            {renderSymptomsList()}
          </select>
        </Col>
        <Col lg={2}>
          <Button size="sm" color="primary" className={styles.button}>
            Find Clinics
          </Button>
        </Col>
      </Row>
      {props.selectedSymptoms.length > 0 && (
        <p className="mb-1" style={{ fontSize: "0.8rem" }}>
          Selected Symptoms:
        </p>
      )}
      <div>{renderSelectedSymptoms()}</div>
    </Card>
  );
};
