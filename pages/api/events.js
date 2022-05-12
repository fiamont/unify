import { db } from '../../utils/firebase';
import * as yup from 'yup'

export default async function handler(req, res) {
    switch(req.method) {
        case 'POST':
        try {
            const body = req.body // {title: "", content: "", preview:""}

            // validate if body is following what we are expecting
            await yup
            .object()
            .shape({
                title: yup.string().required().min(3),
            }).validate(body, {abortEarly: false})

            const ref = await db.collection('events').add(body)
            const doc = await ref.get()

            const event = { id: doc.id, ...doc.data() }

            res.status(201).json(event)
        } catch (err) {
            res.status(422).json({errors: err.errors})
        }
        break
        default:
            res.status(405).send('Method not allowd')
            break
    }
}