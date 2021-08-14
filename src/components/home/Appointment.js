import { Button, Col, Row } from 'reactstrap'
import styles from '../../assets/scss/modules/Appointment.module.scss'

export const Appointment = (props) => {

  const renderTime = (date, day) => {
    return (
      <div className="mt-3">
        <small className="fw-bold d-flex align-center">
          <span>{day}</span>
          <span className="ms-auto">{date}</span>
        </small>
        <Row className="mt-2 gx-1">
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>09.00 am</p>
          </Col>
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>10.00 am</p>
          </Col>
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>11.00 am</p>
          </Col>
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>12.00 pm</p>
          </Col>
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>01.00 pm</p>
          </Col>
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>02.00 pm</p>
          </Col>
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>03.00 pm</p>
          </Col>
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>04.00 pm</p>
          </Col>
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>05.00 pm</p>
          </Col>
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>06.00 pm</p>
          </Col>
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>07.00 pm</p>
          </Col>
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>08.00 pm</p>
          </Col>
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>09.00 pm</p>
          </Col>
          <Col lg={3} className="mb-1">
            <p className={`${styles.time} mb-0 border border-primary rounded-3 px-1 py-1`}>10.00 pm</p>
          </Col>
        </Row>
      </div>
    )
  }

  return (
    <aside className={`${props.selectedClinic.id && styles.container} d-flex flex-column border rounded-3`}>
      <div className="p-3">
        <h6>Appointment Slot</h6>
        <h3>{props.selectedClinic.name}</h3>
        {props.selectedClinic.id && <div className="mt-3 d-flex align-items-center">
          <span className="text-primary fw-bold">09 - 15 Aug 2021</span>
          <Button size="sm" className="ms-auto" color="primary">Change Week</Button>
        </div>}
      </div>
      {props.selectedClinic.id && <div className={`${styles.timeContainer}`}>
        {renderTime('09 Aug 2021', 'Monday')}
        {renderTime('10 Aug 2021', 'Tuesday')}
        {renderTime('11 Aug 2021', 'Wednesday')}
        {renderTime('12 Aug 2021', 'Thursday')}
        {renderTime('13 Aug 2021', 'Friday')}
        {renderTime('14 Aug 2021', 'Saturday')}
        {renderTime('15 Aug 2021', 'Sunday')}
      </div>}
      {!props.selectedClinic.id && <div className="text-center m-4">
        <h4>Please Choose One Clinic</h4>
      </div>}
      {props.selectedClinic.id && <div className="p-3 mt-auto">
        <Button color="primary" className="w-100">Next</Button>
      </div>}
    </aside>
  )
}
