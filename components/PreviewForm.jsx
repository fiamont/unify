import React from 'react'
import style from './../styles/MultiStepForm.module.css'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'


function PreviewInfoForm({ formDatas, setFormDatas }) {
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([]) //Array of string
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const body = Object.fromEntries(formData.entries())
   

    // make an http requset
    // request the endpoint that will create this new post
    // POSTS /api/posts
    // fetch('/api/posts', {method: 'POST'})

    setIsLoading(true)
   axios.post('/api/posts', body)
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
    <form onSubmit={handleSubmit}>
    <div className={style.previewInfoContainer}>
        <div className={style.eventPic}></div>
       <div className={style.previewBox1}>
           <div className={style.previewDateTime}>
                <input
                    className={style.previewDate}
                    htmlFor="date"
                    type="text"
                    id="date"
                    name="date"
                    value={formDatas.date}
                 />
                <input
                    className={style.previewDate}
                    htmlFor="time"
                    type="text"
                    id="time"
                    name="time"
                    value={formDatas.time}
                />
            </div>
            <input
            className={style.previewEventName}
            htmlFor="EventName"
            type="text"
            id="eventName"
            name="eventName"
            value={formDatas.eventName}
            />
            <div className={style.previewUserName}><p>Anordnat av:</p>
            <input htmlFor="userName"
            
            type="text"
            id="userName"
            name="userName"
            value={formDatas.userName}
            />
            </div>
        </div>
        <textarea
        className={style.previewTextarea}
        htmlFor="description"
        type="text"
        id="description"
        name="description"
        value={formDatas.textarea}
        />
        <div>
          <button className={style.submitBtn} type="submit"disabled={isLoading}>Create!</button>
        </div>

     
    </div>
    </form>

  );
}

export default PreviewInfoForm