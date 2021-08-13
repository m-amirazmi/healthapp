import { Col, Row, Badge } from 'reactstrap'
import { MainLayout } from '../layouts/MainLayout'
import { Appointment } from '../components/home/Appointment'
import { Search } from '../components/home/Search'
import { ClinicCard } from '../components/home/ClinicCard'

export const Clinics = () => {
  return (
    <MainLayout>
      <Row>
        <Col lg={9}>
          <Search />
          <Row className="gx-3">
            <ClinicCard />
            <ClinicCard />
            <ClinicCard />
            <ClinicCard />
            <ClinicCard />
            <ClinicCard />
            <ClinicCard />
            <ClinicCard />
          </Row>
        </Col>
        <Col lg={3}>
          <Appointment />
        </Col>
      </Row>
    </MainLayout>
  )
}
