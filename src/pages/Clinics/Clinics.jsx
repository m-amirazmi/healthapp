import { Col, Row } from "reactstrap";
import { ClinicCard } from "../../components/ClinicCard/ClinicCard";
import { Search } from "../../components/Search/Search";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { useClinics } from "./useClinics";

export const Clinics = () => {
  const {
    clinics,
    isLoad,
    symptoms,
    selectClinic,
    selectSymptom,
    selectedClinic,
    selectedSymptoms,
    removeSelectedSymptom,
  } = useClinics();

  const renderClinicCard = () => {
    return clinics.map((clinic) => {
      const active = clinic.id === selectedClinic.id ? true : false;
      const findSelectedSymptomsClinic =
        selectedSymptoms.length !== 0
          ? selectedSymptoms.find((symptom) =>
              clinic.symptomsHandled.includes(symptom.id)
            )
          : clinic;
      if (!findSelectedSymptomsClinic) return null;
      return (
        <ClinicCard
          key={clinic.id}
          active={active}
          clinic={clinic}
          symptoms={symptoms}
          selectClinic={selectClinic}
        />
      );
    });
  };

  const renderContent = () => {
    if (isLoad) {
      return <h1>Loading...</h1>;
    }
    if (!isLoad) {
      return <Row className="gx-3">{renderClinicCard()}</Row>;
    }
  };

  return (
    <MainLayout>
      <Row>
        <Col lg={12}>
          <Search
            symptoms={symptoms}
            selectedSymptoms={selectedSymptoms}
            selectSymptom={selectSymptom}
            removeSelectedSymptom={removeSelectedSymptom}
          />
          <div>
            <p className="text-end">
              <span className="fw-bold">{clinics.length}</span> Clinics Found
            </p>
          </div>
          {renderContent()}
        </Col>
      </Row>
    </MainLayout>
  );
};
