import { useState } from "react";
import EventInfoForm from "./EventInfoForm";
import DescriptionInfoForm from "./DescriptionForm";
import PreviewInfoForm from "./PreviewForm";
import style from '../styles/MultiStepForm.module.css'

import { Container, Row, Col } from "react-bootstrap";

export default function NewPost() {
    const [step, setstep] = useState(1);
    const [formDatas, setFormDatas] = useState({
      eventName: "",
      date: "",
      time: "",
      category: "",
      location: "",
      city:"",
      description: "",
      price: "",
      numbOfParticipants: "",
    });

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const prevTwoStep = () => {
    setstep(step - 2);
  };

  const handleInputData = input => e => {
    const {value } = e.target;

    setFormDatas(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

  switch (step) {
    case 1:
      return (
        <Container>
          <Row>
             <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
              <EventInfoForm nextStep={nextStep} handleFormData={handleInputData} values={formDatas} />
            </Col>
          </Row>
        </Container>
        
    
      );
    case 2:
      return (
        <div className={style.flexContainer}>
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <DescriptionInfoForm nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formDatas} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 3:
      return (
        <div className={style.flexContainer}>
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <PreviewInfoForm prevStep={prevStep} prevTwoStep={prevTwoStep} handleFormData={handleInputData} values={formDatas} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    default:
      return (
        <div className={style.flexContainer}>
        </div>
      );
  } 
}