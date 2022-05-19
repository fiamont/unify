import { db } from "../../utils/firebase"

export default function Post({ post }) {
    return (
        <div>
        <h1>Username: {post.userName}</h1>
        <p>Evenemangs namn: {post.eventName}</p>
        <p>Beskrivning: {post.description}</p>
        <p>Kategori: {post.category}</p>
        <p>Datum: {post.date}</p>
        <p>Tid: {post.time}</p>
        <p>Pris: {post.price}</p>
        <p>Antal deltagare: {post.numbOfParticipants}</p>
        <p>Adress: {post.location}</p>
        <p>Stad: {post.city}</p>
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