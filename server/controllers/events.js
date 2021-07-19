import express from 'express';
import mongoose from 'mongoose';
import EventsModel from '../models/Events.js';

const router = express.Router();


export const getEvents = async(req,res)=>{

  // destructure the page that is passed from the query
  const { page } = req.query;

  // Number is used to convert the page number (that's in string format in the query) into an integer

    try{
      const LIMIT = 8;
      // to get the starting index of every page
      const startIndex = ( Number(page) - 1 ) * LIMIT ;
      console.log(req.query);
      const total = await EventsModel.countDocuments({});
      // sorting cuz we want the posts from newest to oldest. -1 means sort in descending order
      const events = await EventsModel.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
      res.status(200).json({data : events, currentPage: Number(page) , numberOfPages: Math.ceil(total/LIMIT)} );
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

export const createEvent = async (req, res) => {
    const event = req.body;
  
    const newEventMessage = new EventsModel({
      ...event
    });
  
    try {
      await newEventMessage.save();
  
      res.status(201).json(newEventMessage);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };


export default router;