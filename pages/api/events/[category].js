// import { NextApiRequest, NextApiResponse } from "next";

export default function getEventsByCategory(req, res){
    res.json({byCategory: req.query.category, message: 'getEventsByCategory'});
}