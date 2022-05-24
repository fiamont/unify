import React, { useState } from "react";
import style from "./../styles/MultiStepForm.module.css";
import Link from "next/link";
import Payments from "./Icons/payments";
import Participants from "./Icons/Participants";

function EventInfoForm({ nextStep, handleFormData, values }) {
  const [showModalCancel, setShowModalCancel] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();

    const isValid = formValidation();
    if (isValid) {
      nextStep();
    }
  };

  const [categoryErr, setCategoryErr] = useState({});
  const [eventNameErr, setEventNameErr] = useState({});
  const [dateErr, setDateErr] = useState({});
  const [timeErr, setTimeErr] = useState({});
  const [locationErr, setLocationErr] = useState({});
  const [cityErr, setCityErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    setShowModalCancel(true);
  };

  const formValidation = () => {
    const categoryErr = {};
    const eventNameErr = {};
    const dateErr = {};
    const timeErr = {};
    const locationErr = {};
    const cityErr = {};
    let isValid = true;

    if (values.category.trim().length < 1) {
      categoryErr.chooseCategory = "Välj kategori";
      isValid = false;
    }

    if (values.eventName.trim().length < 5) {
      eventNameErr.firstNameShort =
        "Evenemanget måste ha ett namn på minst 5 bokstäver";
      isValid = false;
    }

    if (values.date.trim().length < 1) {
      dateErr.dateShort = "Välj ett datum";
      isValid = false;
    }

    if (values.time.trim().length < 1) {
      timeErr.timeShort = "Ange en tid";
      isValid = false;
    }

    if (values.location.trim().length < 2) {
      locationErr.dateShort = "Platsen måste innehålla minst 2 bokstäver";
      isValid = false;
    }

    if (values.city.trim().length < 1) {
      cityErr.cityShort = "Välj stad";
      isValid = false;
    }

    setEventNameErr(eventNameErr);
    setCategoryErr(categoryErr);
    setDateErr(dateErr);
    setTimeErr(timeErr);
    setLocationErr(locationErr);
    setCityErr(cityErr);
    return isValid;
  };

  return (
    <div className={style.eventInfoContainer}>
      <div className={style.form}>
        <div className={style.header}>
          <div className={style.headerBtn}>
            <button className={style.cancelBtn} onClick={onSubmit}>
              Avbryt
            </button>
          </div>
          <h1>Evenemangsinfo</h1>
        </div>
        <form className={style.formTag} onSubmit={submitFormData}>
          <div className={style.categoryDiv}>
            <select
              className={style.category}
              name="category"
              defaultValue={values.category}
              onChange={handleFormData("category")}
            >
              <option label="Välj kategori"></option>
              <option value="Nöje & Uteliv">
              Nöje & Uteliv
              </option>
              <option value="Mat & Dryck">Mat & Dryck</option>
              <option value="Kultur & Livsstil">Kultur & Livsstil</option>
              <option value="Sport & Fritid">Sport & Fritid</option>
              <option value="Hantverk & Konst">Hantverk & Konst</option>
            </select>
            {Object.keys(categoryErr).map((key) => {
              return (
                <div key={key} style={{ color: "red" }}>
                  {categoryErr[key]}
                </div>
              );
            })}
          </div>

          <div className={style.titleDiv}>
            <p>Evenemangets namn</p>
            <input
              name="eventName"
              defaultValue={values.eventName}
              type="text"
              onChange={handleFormData("eventName")}
            />
            {Object.keys(eventNameErr).map((key) => {
              return (
                <div key={key} style={{ color: "red" }}>
                  {eventNameErr[key]}
                </div>
              );
            })}
          </div>

          <div className={style.dateTimeContainer}>
            <div className={style.inputDateTime}>
              <div className={style.dateTimeBox}>
                <p>Datum</p>
                <div className={style.date}>
                  <input
                    name="date"
                    defaultValue={values.date}
                    type="date"
                    onChange={handleFormData("date")}
                  />
                  {Object.keys(dateErr).map((key) => {
                    return (
                      <div key={key} style={{ color: "red" }}>
                        {dateErr[key]}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={style.dateTimeBox}>
                <p>Tid</p>
                <div className={style.time}>
                  <input
                    name="time"
                    defaultValue={values.time}
                    type="time"
                    onChange={handleFormData("time")}
                  />
                  {Object.keys(timeErr).map((key) => {
                    return (
                      <div key={key} style={{ color: "red" }}>
                        {timeErr[key]}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className={style.title}>
            Plats
            <div className={style.adressContainer}>
              <div className={style.LocationContainer}>
                <input
                  name="location"
                  defaultValue={values.location}
                  type="text"
                  onChange={handleFormData("location")}
                />
                {Object.keys(locationErr).map((key) => {
                  return (
                    <div key={key} style={{ color: "red" }}>
                      {locationErr[key]}
                    </div>
                  );
                })}
              </div>

              <div className={style.cityContainer}>
                <select
                  className={style.city}
                  name="city"
                  defaultValue={values.city}
                  onChange={handleFormData("city")}
                >
                  <option label="Välj stad"></option>
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
                {Object.keys(cityErr).map((key) => {
                  return (
                    <div key={key} style={{ color: "red" }}>
                      {cityErr[key]}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={style.priceAndParticipants}>
            <div className={style.priceParticipantsInner}>
              <div className={style.priceParticipantsSymbol}>
                <Payments />
              </div>
              <div className={style.priceAndParticipantsBox}>
                <p className={style.textPriceAndParticipants}>PRIS</p>
                <p className={style.textOptionally}>Valfritt</p>
              </div>
              <input
                name="price"
                defaultValue={values.price}
                type="text"
                onChange={handleFormData("price")}
              />
              <label className={style.krSt}>KR</label>
            </div>
            <div className={style.priceParticipantsInner}>
              <div className={style.priceParticipantsSymbol}>
                <Participants />
              </div>
              <div className={style.priceAndParticipantsBox}>
                <p className={style.textPriceAndParticipants}>
                  ANTAL DELTAGARE
                </p>
                <p className={style.textOptionally}>Valfritt</p>
              </div>
              <input
                name="price"
                defaultValue={values.numbOfParticipants}
                type="text"
                onChange={handleFormData("numbOfParticipants")}
              />
              <label className={style.krSt}>ST</label>
            </div>
          </div>

          <div className={style.progressDots}>
            <div className={style.progressDotFilled} />
            <div className={style.progressDotEmpty} />
            <div className={style.progressDotEmpty} />
          </div>

          <button className={style.nextPageBtn} variant="primary" type="submit">
            Nästa
          </button>
        </form>
        {showModalCancel ? (
          <div className={style.showModal}>
            <div className={style.showModalInner}>
              <div className={style.cancelContainer}>
                <h2>AVSLUTA UTAN ATT SLUTFÖRA?</h2>
                <p>
                  Om du lämnar nu skapas inte ditt <br /> evenemang och det du
                  hittills har gjort <br /> sparas inte.
                </p>
                <Link href="/" passHref>
                  <button className={style.cancelBtnPopup}>AVSLUTA</button>
                </Link>
                <div className={style.solidLinePopUp} />
                <button
                  className={style.continueEditBtnPopup}
                  onClick={() => setShowModalCancel(false)}
                >
                  FORTSÄTT REDIGERA
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default EventInfoForm;
