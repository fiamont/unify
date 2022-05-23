import { db } from '../../utils/firebase';

export default async function handler(req, res) {
    switch(req.method) {
        // case 'GET': 
            // const { city } = req.query
            // let query = db.collection('posts')

            // if(city != 'Välj stad') {
            // query = query.where('city', '==', city)
            // }
            // const snapshots = await query.get()
            // const posts = snapshots.docs.map(doc => {id:doc.id, ...doc.data()})



// res.status(200).json(posts)

        case 'POST':
            const body = req.body // {title: "", content: "", preview:""}

            const ref = await db.collection('posts').add(body)
            const doc = await ref.get()

            const post = { id: doc.id, ...doc.data() }

            res.status(201).json(post)
   
        break
        default:
            res.status(405).send('Method not allowd')
            break
    }
}