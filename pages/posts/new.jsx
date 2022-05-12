import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import EventInfoForm from "../../components/EventInfoForm";
import DescriptionInfoForm from "../../components/DescriptionForm";
import PreviewInfoForm from "../../components/PreviewForm";
import style from '../../styles/MultiStepForm.module.css'

export default function NewPost() {
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([]) //Array of string
    const router = useRouter()

    const [page, setPage] = useState(0);
    const [formDatas, setFormDatas] = useState({
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
          return <EventInfoForm formDatas={formDatas} setFormDatas={setFormDatas} />;
        } else if (page === 1) {
          return <DescriptionInfoForm formDatas={formDatas} setFormDatas={setFormDatas} />;
        } else {
          return <PreviewInfoForm formDatas={formDatas} setFormDatas={setFormDatas} />;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const formDatas = Object.fromEntries(formData.entries())
       

        // make an http requset
        // request the endpoint that will create this new post
        // POSTS /api/posts
        // fetch('/api/posts', {method: 'POST'})

        setIsLoading(true)
       axios.post('/api/posts', formDatas)
            .then((res) => {
            const postId = res.data.id
            router.push(`/posts/${postId}`)
       })
       .catch((err) => {
           setErrors(err.response.data.errors)
       })
        .finally(() => {
        setIsLoading(false)
       })
    }
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
                        if(page === FormTitles.length -1) {
                  
                        console.log(formDatas)
                        } else {

                        }
                        setPage((currPage) => currPage +1);
                    }}>{page === FormTitles.length -1 ? "Publicera evenemang" : "Nästa"}</button>
      
  
                </div>
            </div>
        </div>
  
    
    
    )
}