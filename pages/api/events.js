import { database } from '../../firebaseConfig'
import { collection, doc, getDocs, query, where, orderBy, limit } from 'firebase/firestore'
// import React, { useState, useEffect } from 'react'

export default async function getAllEvents(req, res){
    // if(req.method !== 'GET') {
    //     res.status(500).json({message: 'only GET requests'})
    // }

    const dbInstance = collection(database, 'events');
    const querySnapshot = await getDocs(dbInstance);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });

    const events = querySnapshot.docs.map(doc => {
        return {
            //id: doc.id,
            ...doc.data()
        }
    })
    // const events = query(dbInstance, where("category", "==", "Mat & Dryck"), limit(4))
    // const [events, setEvents] = useState([]);
    // useEffect(() => {
    //     const getEvents = async () => {
    //         const data = await getDocs(dbInstance);
    //         setEvents(data.docs.map((doc) => ({...doc.data})));
    //     };

    //     getUsers();
    // }, []);

    res.json(events);
}
