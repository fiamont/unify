// import { NextApiRequest, NextApiResponse } from "next";

export default function getEventById(req, res){
    res.json({byId: req.query.id, message: 'getEventById'});
}