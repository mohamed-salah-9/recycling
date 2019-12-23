const express = require('express') ; 
const router = express.Router();
const Services = require('./../models/services');

router.post('/services' , async (req,res) => {
        const service = new Services(req.body)
    try{
        await service.save()
        res.status(201).send(service)
    }
    catch(e){
        res.status(400).send(e)
    }
}) 

router.get('/services' , async(req , res) =>{
   
    try{
       const service = await Services.find({})
       res.send(service)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.patch('/services/:id',async(req,res)=>{
    try{
        const service = 
        await Services.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {new:true, runValidators:true}
            )
        if(!service) return res.send('not found')
        res.send(service)
        }
    catch(e) { res.send(e) }
})

router.delete('/services/:id' , async(req,res)=>{
    try{
        const service = await Services.findByIdAndDelete(
            req.params.id
        )
        if(!service) return res.send('not found')
        res.send(service)
    }
    catch(e){
        {res.send(e)}
    }

})
module.exports = router 