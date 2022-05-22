import { useState } from "react";
import EventInfoForm from "./EventInfoForm";
import DescriptionInfoForm from "./DescriptionForm";
import PreviewInfoForm from "./PreviewForm";
import style from '../styles/MultiStepForm.module.css'

import { Container, Row, Col } from "react-bootstrap";

export default function NewPost() {
    const [showBtn, setShowBtn] = useState(true);

    const [page, setPage] = useState(0);

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

    // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  const prevTwoStep = () => {
    setstep(step - 2);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormDatas(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

    const FormTitles = ["Evenemanginfo", "Beskrivning", "Granska evenemang"];

    const PageDisplay = () => {
        if (page === 0) {
          return <EventInfoForm formDatas={formDatas} setFormDatas={setFormDatas} />;
        } else if (page === 1) {
          return <DescriptionInfoForm formDatas={formDatas} setFormDatas={setFormDatas} />;
        } else {
          return <PreviewInfoForm formDatas={formDatas} setFormDatas={setFormDatas} />;
        }
    };

    // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
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
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
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
      // Only formData is passed as prop to show the final value at form submit
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
    // default case to show nothing
    default:
      return (
        <div className={style.flexContainer}>
        </div>
      );
  }
    /* 
    return (
        <div>
        <Head><title>Unify - Skapa event</title></Head>
        </div> */
    
        {/* <main>
        <div className={style.flexContainer} >
            <div className={style.form}>
                <div className={style.header}>
                    <div className={style.headerBtn}>
                    <button
                        className={style.backBtn}
                        disabled={page == 0} 
                        onClick={() => {setPage((currPage) => currPage -1);
                            setShowBtn(true)
                        }}
                        ><Arrow /></button>
                        
                    <Link href="/" ><button className={style.cancelBtn}>Avbryt</button></Link>
                    </div>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className={style.body}>{PageDisplay()}</div>
                <div className={style.footer}>
                    <div className={style.progressDots}>
                        <div className={style.progressDot}/>
                        <div className={style.progressDot} style={{background: page >= 1 ? '#DC5027' : '#dc51275d'}}/>
                        <div className={style.progressDot} style={{background: page >= 2 ? '#DC5027' : '#dc51275d'}}/>
                    </div>
                  
                    {(showBtn &&
                    <button
                    onClick={() => {
                        if(page === FormTitles.length -1) {
                            console.log(formDatas)  
                        } else if(page === FormTitles.length -2) {
                            setShowBtn(false)
                        }
                        setPage((currPage) => currPage +1);
                        
                    }}>{page === FormTitles.length -1 ? "Publicera Evenemang" : "Nästa"}</button>
                    )}
  
                </div>
            </div>
        </div>
        </main> */}
      

    
    
}