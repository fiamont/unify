import { db } from "../../utils/firebase"
import CategorySelector from "../../components/CategorySelector"
import Image from "next/image"
import style from '../../styles/EventId.module.css'
import ShowUpBtn from "../../components/ShowUp"
import BackToHomepage from '../../components/BackToHomepage'

export default function Post({ post }) {
    return (
        <div >
            <BackToHomepage className={style.arrow}/>
            <div className={style.event}>
                <div>
                    <p className={style.eventName}>{post.eventName}</p>
                    <div className={style.container}>
                        <div className={style.outerborder} style={{background: CategorySelector(post.category).lightColor}}>
                            <div className={style.innerBorder} style={{background: CategorySelector(post.category).darkColor}}>
                                <div className={style.imgWrapper}>
                                    <Image className={style.eventimg} src={CategorySelector(post.category).eventImage} alt='eventbild' width="500" height="333"/>
                                </div>
                                <div className={style.categoryBox} style={{background: CategorySelector(post.category).categoryBox}}>
                                    <p className={style.categoryText}>{post.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.rowDiv}>
                        <Image src="/calendar.png" alt='calendar' width={24} height={24}/>
                        <p className={style.p}>{post.date}</p>
                        <p className={style.p}>KL. {post.time}</p>
                    </div>
                    <div className={style.rowDiv}>
                        <Image src="/payments.png" alt='payments' width={24} height={24}/>
                        <p className={style.p}>{post.price} KR</p>
                    </div>
                    <div className={style.rowDiv}>
                        <Image src="/locationBlack.png" alt='locationBlack' width={24} height={24}/>
                        <p className={style.p}>Adress {post.location}</p>
                        <p className={style.p}>Stad {post.city}</p>
                    </div>
                    <p className={style.description}>{post.description}</p>
                </div>
            
                <div className={style.showUpBtnDiv}>
                    <ShowUpBtn className={style.showUpBtn} color={CategorySelector(post.category).showUpBtn} style={{width: '332px'}}/>
                </div>
        
            </div>
            
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params

    const doc = await db.collection('posts').doc(id).get()

    const post = {
        id: doc.id,
        ...doc.data(),
    }

    return {
        props: {
            post: post,
        },
    }
}