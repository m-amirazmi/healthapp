import { Card, Col, Row, Button } from "reactstrap";
import styles from "./ClinicCard.module.scss";

export const ClinicCard = (props) => {
  const handleSelectClinic = () => {
    props.selectClinic(props.clinic);
  };

  const renderSymptomsHandled = () => {
    return props.clinic.symptomsHandled.map((symptom) => {
      const findSymptom = props.symptoms.find((s) => s.id === symptom);
      return (
        <span key={findSymptom.id} className={`${styles.badge} badge me-1`}>
          {findSymptom.name}
        </span>
      );
    });
  };

  const activeStyle = props.active && styles.active;
  return (
    <Col lg={6}>
      <Card
        body
        className={`${styles.container} ${activeStyle} mb-3 rounded-3`}
        onClick={handleSelectClinic}
      >
        <Row>
          <Col lg={3}>
            <img
              src={props.clinic.image}
              className={`${styles.image} rounded-3`}
              alt={props.clinic.name}
            />
          </Col>
          <Col lg={5}>
            <h4 className="mb-0">{props.clinic.name}</h4>
            <p className={`${styles.location} d-flex mb-1`}>
              <span>
                {props.clinic.location.city}, {props.clinic.location.state}
              </span>
            </p>
            <p className={`${styles.reviews} mb-1`}>
              <i className="bi bi-star-fill text-warning me-2"></i>
              <span>4.50 (12 reviews)</span>
            </p>
          </Col>
          <Col lg={4}>
            <div className="mt-1 text-md-end">
              <span
                className={`${styles.range} rounded-3 px-2 py-1 text-primary`}
              >
                <i className="bi bi-geo-alt me-1"></i>
                <span>5 km away</span>
              </span>
              {/* <i className="bi bi-three-dots-vertical ms-1 text-primary"></i> */}
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <div className="mb-3">
            <h6 className="mb-0">Symptoms Handled:</h6>
            {renderSymptomsHandled()}
          </div>
          <div>
            <h6 className="mb-0">Services Offered:</h6>
            <span className={`${styles.badge} badge me-1`}>XRay</span>
            <span className={`${styles.badge} badge me-1`}>
              Medical Checkup
            </span>
            <span className={`${styles.badge} badge me-1`}>Blood Test</span>
          </div>
        </Row>
        {props.active && (
          <div className="mt-3">
            <Button size="sm" color="primary" className="w-100">
              Book Now
            </Button>
          </div>
        )}
      </Card>
    </Col>
  );
};
