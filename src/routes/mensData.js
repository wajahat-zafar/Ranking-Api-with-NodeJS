const express = require('express');
const router = new express.Router();
const Ranking = require('../models/rankData');

router.post("/men",async (req,res)=>{
    try{
        const getRankData = new Ranking(req.body);
        console.log(getRankData)
        const newRankData = await getRankData.save();
        res.send(newRankData)


    }catch(err){
        res.send(err)
    }
})

router.get('/men', async(req,res)=>{
    try{
        const getData =  await Ranking.find({}).sort({"ranking":1});
        res.send(getData)


    }catch(err){
        res.send(err)
    }
})

router.get('/men/:name', async(req,res)=>{
    try{
        const _name = req.params.name
        const getName = await Ranking.find({name:_name})
        if(getName ==""){
            res.send(404)
        }else{
            res.send(getName)
        }
    }catch(err){
        res.send(err)
    }
})

router.patch('/men/:name', async(req,res)=>{
    try{
        const _name = req.params.name
        const updateMen = await Ranking.findOneAndUpdate({name:_name},req.body,{
            new:true})
        res.send(updateMen)

    }catch(err){
        res.send(err)

    }
})


router.delete('/men/:id', async(req,res)=>{
    try{
        const _id = req.params.id
        const deleteMan = await Ranking.findByIdAndDelete(_id);
        if(!_id){
            res.send('Id not found')
        }else{
            res.send(deleteMan)
        }
    }catch(err){
        res.send(err)

    }
})

module.exports = router;