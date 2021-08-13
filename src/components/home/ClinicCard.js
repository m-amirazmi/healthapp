import { Card, Col, Row } from 'reactstrap'
import klinik from '../../assets/images/klinik-idzham.jpg'
import styles from '../../assets/scss/modules/ClinicCard.module.scss'

export const ClinicCard = () => {
  return (
    <Col lg={6}>
      <Card body className={`${styles.container} mb-3 rounded-3`}>
        <Row>
          <Col lg={3}>
            <img src={klinik} width="100%" height="80px" className="rounded-3" />
          </Col>
          <Col lg={5}>
            <h4 className="mb-0">Klinik Idzham</h4>
            <p className="d-flex mb-1">
              <span>Ampang, Selangor</span>
            </p>
            <p className={`${styles.reviews} mb-1`}>
              <i className="bi bi-star-fill text-warning me-2"></i>
              <span>4.50 (12 reviews)</span>
            </p>
          </Col>
          <Col lg={4}>
            <div className="d-flex mt-1">
              <span className={`${styles.range} px-3 rounded-3 text-secondary"`} style={{ fontSize: '0.9rem' }}>5 km away</span>
              <i className="bi bi-three-dots-vertical ms-auto"></i>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <div className="mb-3">
            <h6 className="mb-0">Symptoms Handled:</h6>
            <span className={`${styles.badge} ${styles.symptoms} badge me-1`}>Mild Fever</span>
            <span className={`${styles.badge} ${styles.symptoms} badge me-1`}>Cough</span>
            <span className={`${styles.badge} ${styles.symptoms} badge me-1`}>Headache</span>
            <span className={`${styles.badge} ${styles.symptoms} badge me-1`}>Stomache</span>
            <span className={`${styles.badge} ${styles.symptoms} badge me-1`}>Nausea</span>
          </div>
          <div>
            <h6 className="mb-0">Services Offered:</h6>
            <span className={`${styles.badge} badge me-1`}>XRay</span>
            <span className={`${styles.badge} badge me-1`}>Medical Checkup</span>
            <span className={`${styles.badge} badge me-1`}>Blood Test</span>
          </div>
        </Row>
      </Card>
    </Col>
  )
}
