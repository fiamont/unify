import React from "react";
import style from './../styles/MultiStepForm.module.css'
import { useState } from "react";
import EventInfoForm from "./EventInfoForm";
import DescriptionInfoForm from "./DescriptionForm";
import PreviewInfoForm from "./PreviewForm";
import axios from "axios";
import { useRouter } from "next/router";




export default function MultiStepForm() {

    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([]) //Array of string
    const router = useRouter()

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData2 = new FormData(event.target)
        const body = Object.fromEntries(formData2.entries())
        console.log(body) 

        // make an http requset
        // request the endpoint that will create this new post
        // POSTS /api/posts
        // fetch('/api/posts', {method: 'POST'})

        setIsLoading(true)
       axios.event('/api/events', formData)
            .then((res) => {
            const eventId = res.data.id
            router.push(`/events/${eventId}`)
       })
       .catch((err) => {
           setErrors(err.response.data.errors)
       })
        .finally(() => {
        setIsLoading(false)
       })
    }

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        userName: "",
        eventName: "",
        date: "",
        time: "",
        category: "",
        location: "",
        textarea: "",
        price: "",
        numbOfParticipants: "",
      });

    const FormTitles = ["Evenemanginfo", "Beskrivning", "Granska evenemang"];

    const PageDisplay = () => {
        if (page === 0) {
          return <EventInfoForm formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
          return <DescriptionInfoForm formData={formData} setFormData={setFormData} />;
        } else {
          return <PreviewInfoForm formData={formData} setFormData={setFormData} />;
        }
    };

  return (
     
      <div className={style.flexContainer} >
        <div className={style.form}>
                    
                <div className={style.header}>
                <button
                    disabled={page == 0} 
                    onClick={() => {setPage((currPage) => currPage -1);
                    }}
                    >Bakåt</button>
                    <h1>{FormTitles[page]}</h1>
                </div>
                
                <div className={style.body}>{PageDisplay()}</div>

                <div className={style.footer}>
                    <div className={style.progressbar}>
                        <div style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}></div>
                    </div>
                    <button 
                onClick={() => {
                    if (page === FormTitles.length -1) {
                    
                        handleSubmit();
                        console.log(formData);
                    } else {

                    }
                    setPage((currPage) => currPage +1);
                }}
                >{page === FormTitles.length -1 ? "Publicera evenemang" : "Nästa"}</button>
                </div>
            
        </div>
    </div>
  
  );
}