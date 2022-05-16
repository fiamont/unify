import { db } from "../../utils/firebase"

export default function Post({ post }) {
    return (
        <div>
        <h1>{post.userName}</h1>
        <p>{post.eventName}</p>
        <p>{post.description}</p>
        <p>{post.date}</p>
        <p>{post.time}</p>
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