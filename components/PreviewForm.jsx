import React, { useState } from "react";
import style from "./../styles/MultiStepForm.module.css";
import axios from "axios";
import CategorySelector from "../components/CategorySelector";
import Image from "next/image";
import Arrow from "./Icons/arrow";
import Link from "next/link";
import Description from "./Icons/Description";
import EventInfo from "./Icons/EventInfo";
import Adress from "./Icons/Adress";
import RightArrow from "./Icons/RightArrow";

function PreviewInfoForm({ prevStep, prevTwoStep, values }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowModal(true);

    const formData = new FormData(event.target);
    const body = Object.fromEntries(formData.entries());

    setIsLoading(true);
    axios
      .post("/api/posts", body)
      .then((res) => {
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setShowModalCancel(true);
  };

  const {
    eventName,
    date,
    time,
    category,
    location,
    description,
    price,
    numbOfParticipants,
    city,
  } = values;

  return (
    <div className={style.previewinfoContainer}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.header}>
          <div className={style.headerBtn}>
            <button
              className={style.backBtn}
              variant="primary"
              onClick={prevStep}
            >
              <Arrow />
            </button>
            <button className={style.cancelBtn} onClick={onSubmit}>
              Avbryt
            </button>
          </div>
          <h1>Granska evenemang</h1>
        </div>
        <div className={style.container}>
          <div
            className={style.outerborder}
            style={{ background: CategorySelector(values.category).lightColor }}
          >
            <div
              className={style.innerBorder}
              style={{
                background: CategorySelector(values.category).darkColor,
              }}
            >
              <div className={style.imgWrapper}>
                <Image
                  src={CategorySelector(values.category).eventImage}
                  alt="eventbild"
                  width="500"
                  height="333"
                />
              </div>
              <div
                className={style.categoryBox}
                style={{
                  background: CategorySelector(values.category).categoryBox,
                }}
              >
                <p className={style.categoryText}>{values.category}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.previewDateTime}>
          <div className={style.previewDate}>
            <input name="date" value={date} />
          </div>
          <div className={style.previewTime}>
            <p className={style.previewTimeP}>KL.</p>
            <input name="time" value={time} />
          </div>
        </div>

        <input
          className={style.previewEventName}
          name="eventName"
          value={eventName}
        />

        <div className={style.previewAdressContainer}>
          <div className={style.previewLocationIcon}>
            <Adress />
          </div>
          <div className={style.previewLocation}>
            <input name="location" value={location} />
          </div>
        </div>
        <input className={style.previewCity} name="city" value={city} />
        <div className={style.previewEventInfoContiner} onClick={prevTwoStep}>
          <div className={style.previewEventInfo}>
            <div className={style.previewEventInfoIcon}>
              <EventInfo />
            </div>
            <p>EVENEMANGSINFO</p>
          </div>
          <button className={style.backBtn} variant="primary">
            <RightArrow />
          </button>
        </div>

        <div className={style.previewTextareaContainer} onClick={prevStep}>
          <div className={style.previewDescription}>
            <div className={style.priceParticipantsSymbol}>
              <Description />
            </div>
            <p>BESKRIVNING</p>
          </div>
          <button className={style.backBtn} variant="primary">
            <RightArrow />
          </button>
        </div>
        <div className={style.previewTextarea}>
          <textarea
            type="text"
            name="description"
            value={description}
            cols={1}
            rows={1}
          />
        </div>

        <div className={style.progressDots}>
          <div className={style.progressDotFilled} />
          <div className={style.progressDotFilled} />
          <div className={style.progressDotFilled} />
        </div>

        <div className={style.previewSubmitBtn}>
          <button
            className={style.submitBtn}
            type="submit"
            disabled={isLoading}
          >
            Publicera evenemang
          </button>
        </div>

        {/* Hidden inputs */}
        <input className={style.previewHide} name="price" value={price} />
        <input
          className={style.previewHide}
          name="numbOfParticipants"
          value={numbOfParticipants}
        />
        <input className={style.previewHide} name="category" value={category} />
      </form>

      {showModal ? (
        <div className={style.showModal}>
          <div className={style.showModalInner}>
            <div className={style.partyImg}>
              <Image
                src="/PartyingFace.png"
                alt="PartyingFace"
                width={38}
                height={38}
              />
            </div>
            <h2>
              BINGOOO! <br /> DITT EVENEMANG HAR SKAPATS
            </h2>
            <p>
              Grymt Jobbat! Du har publicerat ditt <br /> evenemang!
            </p>
            <div className={style.solidLinePopUp} />
            <div className={style.buttonContainer}>
              <Link href="/" passHref>
                <button className={style.okPopupBtn}>OK</button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}

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
  );
}

export default PreviewInfoForm;
