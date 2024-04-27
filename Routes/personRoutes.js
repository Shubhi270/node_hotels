
const express = require('express');
const Person = require('../models/person');

const router = express.Router();

router.post('/' , async (req , res) =>{
   try{
    const data = req.body;

    const newPerson = new Person(data);

    const response =  await newPerson.save();

    console.log('data saved');

    res.status(200).json(response);
   }
   catch(err){
    console.log(err);
    res.status(500).json({error: 'internal server error'});
   }
})

router.get('/' , async (req , res) =>{
  try{
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);

  } catch(err){
    console.log(err);
    res.status(500).json({error : 'internal server error'})
  }
})

router.get('/:workType' , async (req , res) =>{
  try{
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter' ){
      const response = await Person.find({work: workType});
      console.log('response fatched');
      res.status(200).json(response);
    } else {
      res.status(404).json({error: 'invalid work Type'});
    }
  } catch(err){
    console.log(err);
    res.status(500).json({error : 'internal server error'});
  }
})

router.put('/:id' , async (req , res) =>{
  try{
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findById(personId, updatedPersonData, {
      new: true,
      runValidators: true,
    });

    if(!response){
      return res.status(404).json({error : 'person Not Found!'})
    }

    console.log('data updated');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internet Server Error'});
  }
})

router.delete('/:id' , async (req , res)=>{
  try{
    const PersonId = req.params.id;
    const response = await Person.findByIdAndDelete(PersonId);
    if(!response){
      return res.status(404).json({error : 'person not found'});
      
    }
    console.log("data deleted");
    res.status(200).json({message : 'person data delted yippeee'})
  }
  catch (err){
    console.log(err);
    res.status(500).json({error: 'internet server error'});
  }
})

module.exports = router;