import React from "react";
import style from '../../styles/MultiStepForm.module.css'
import { useState } from "react";
import EventInfoForm from "../../components/EventInfoForm";
import DescriptionInfoForm from "../../components/DescriptionForm";
import PreviewInfoForm from "../../components/PreviewForm";
import axios from "axios";


export default function MultiStepForm() {

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const body = Object.fromEntries(formData.entries())
        console.log(body) 

        // make an http requset
        // request the endpoint that will create this new post
        // POSTS /api/posts
        // fetch('/api/posts', {method: 'POST'})

       axios.post('/api/posts', body).then((res) => {
        const postId = res.data.id
        router.push(`/posts/${postId}`)
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
                    type="submit"
                onClick={() => {
                    if (page === FormTitles.length -1) {
                        
                       handleSubmit(formData)
                     
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