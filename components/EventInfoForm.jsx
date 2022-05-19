import React, { useState} from 'react'
import style from './../styles/MultiStepForm.module.css'
import { Form, Card, Button, ListGroup, Dropdown, DropdownButton } from "react-bootstrap"
import validator from "validator"
import Link from 'next/link';

function EventInfoForm({ nextStep, handleFormData, values }) {
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.category) ||
      validator.isEmpty(values.eventName) ||
      validator.isEmpty(values.date) ||
      validator.isEmpty(values.time) ||
      validator.isEmpty(values.location) ||
      validator.isEmpty(values.city) 
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
    
  return (
    <div className={style.eventInfoContainer}>
      <div className={style.form}>
        <div className={style.header}>
          <div className={style.headerBtn}>
            <Link href="/" passHref><button className={style.cancelBtn}>Avbryt</button></Link>
          </div>
          <h1>EvenemangInfo</h1>
        </div>

        <form onSubmit={submitFormData}>        
          <select 
          className={style.category}
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
          </select>
          {error ? (
            <Form.Text style={{ color: "red" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}

          <div className={style.title}>
            <p>Evenemangets namn</p>
            <input
              style={{ border: error ? "2px solid red" : "" }}
              name="eventName"
              defaultValue={values.eventName}
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
          </div>

          <div className={style.inputDateTime}>
              <label>Datum: </label>
              <input
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
      
              <label>Tid: </label>
              <input
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

          </div>

          <div className={style.title}>
            <p>Plats</p>
            <input
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
          </div>

          <select
            className={style.city} 
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
          </select>
          {error ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
            ) : (
              ""
          )}

          <button className={style.nextPageBtn} variant="primary" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}
  
export default EventInfoForm