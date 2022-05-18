import React, { useState} from 'react'
import style from './../styles/MultiStepForm.module.css'
import { Form, Card, Button, ListGroup, Dropdown, DropdownButton } from "react-bootstrap"
import validator from "validator"

function EventInfoForm({ formDatas, setFormDatas,nextStep, handleFormData, values }) {
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.eventName) ||
      validator.isEmpty(values.location)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
    
  return (
    <div className={style.flexContainer}>
    <div className={style.form}>
    <div className={style.eventInfoContainer}>
      

      <Card className={style.form}>
        <Card.Body>
          <Form onSubmit={submitFormData}>        

            <Form.Group className={style.title}>
            
              <Form.Select aria-label="Default select example"
              name="category"
              defaultValue={values.category}
              onChange={handleFormData("category")}
              >
              <option label="Välj kategori"></option>
              <option value="Konsert, Quiz & Uteliv">Konsert, Quiz & Uteliv</option>
              <option value="Mat & Dryck">Mat & Dryck</option>
              <option value="Kultur & Livsstil">Kultur & Livsstil</option>
              <option value="Sport & Fritid">Sport & Fritid</option>
              <option value="Konst & Hantverk">Konst & hantverk</option>
              </Form.Select>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className={style.title}>
              <Form.Label>Evenemangets namn</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="eventName"
                defaultValue={values.firstName}
                type="text"
                onChange={handleFormData("eventName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <div className={style.inputDateTime}>
            <Form.Group >
              <Form.Label>Datum: </Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="date"
                defaultValue={values.date}
                type="date" 
                onChange={handleFormData("date")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group >
              <Form.Label>Tid: </Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="time"
                defaultValue={values.time}
                type="time" 
                onChange={handleFormData("time")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            </div>
            
            
            <Form.Group className={style.title}>
              <Form.Label>Plats</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="location"
                defaultValue={values.location}
                type="text"
                onChange={handleFormData("location")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
              
            <Form.Group className={style.city}>
            <Form.Select 
              name="city"
              defaultValue={values.city}
              onChange={handleFormData("city")}>
            <option>Välj stad</option>
            <option value="Stockholm">Stockholm</option>
            <option value="Göteborg">Göteborg</option>
            <option value="Malmö">Malmö</option>
            <option value="Uppsala">Uppsala</option>
            <option value="Västerås">Västerås</option>
            <option value="Örebro">Örebro</option>
            <option value="Linköping">Linköping</option>
            <option value="Lund">Lund</option>
            <option value="Jönköping">Jönköping</option>
            <option value="Umeå">Umeå</option>
            </Form.Select>
            {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            

            <Button variant="primary" type="submit">
              Continue
            </Button>
            </Form>
        </Card.Body>
      </Card>

    </div>
    </div>
    </div>

    /* <div className={style.eventInfoContainer}>
      <div className={style.categoryBox}>
        <select
          className={style.category}
          value={formDatas.category}
          onChange={(event) =>
          setFormDatas({ ...formDatas, category: event.target.value })
          }
          >
          <option label="Välj kategori"></option>
          <option value="Konsert, Quiz & Uteliv">Konsert, Quiz & Uteliv</option>
          <option value="Mat & Dryck">Mat & Dryck</option>
          <option value="Kultur & Livsstil">Kultur & Livsstil</option>
          <option value="Sport & Fritid">Sport & Fritid</option>
          <option value="Konst & Hantverk">Konst & hantverk</option>
        </select>
      </div> 
        
      <div className={style.title} >
        <p>Evenemangets namn</p>
        <input
          type="text"
          name="eventName"
          value={formDatas.eventName}
          onChange={(event) =>
          setFormDatas({ ...formDatas, eventName: event.target.value })
        } />
      </div>
        
      <div className={style.inputDateTime}>
        <label>Datum:</label>
        <input 
          type="date" 
          value={formDatas.date}
          name="date" 
          onChange={(event) =>
          setFormDatas({ ...formDatas, date: event.target.value })
        }></input>

        <label>Tid:</label>
        <input 
          type="time" value={formDatas.time} 
          name="time" 
          onChange={(event) =>
          setFormDatas({ ...formDatas, time: event.target.value })
        }></input>
      </div>

      <div className={style.title}>
        <p>Plats</p>
        <input 
          className={style.location}
          type="text" 
          id="location"
          name="location"
          value={formDatas.location}
          onChange={(event) =>
          setFormDatas({ ...formDatas, location: event.target.value })
        }/>
      </div>        
    </div> */
  )
}
  
export default EventInfoForm