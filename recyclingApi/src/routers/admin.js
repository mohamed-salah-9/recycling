const express= require('express')
const Admin = require('../models/admin')
const auth = require('../middleware/auth')
const router = new express.Router()


router.post('/admin' , async (req,res)=>{
    const admin = new Admin(req.body)
    try {
        await admin.save()
        const token = await admin.generateAuthToken()
        res.status(200).send({admin , token})
    } catch(e) {
        res.send(e)
    }
})

router.post('/admin/login' , async(req,res)=>{

    try{
        const admin = await Admin.findByCredentials(req.body.email,req.body.password)
        const token = await admin.generateAuthToken()
        res.send({admin , token  })
    }
    catch(e){
        res.send(e.message)
    }
})

router.post('/admin/islogin' , async(req,res)=>{
    const admin = req.body.status == true
})

router.post('/admin/logout',auth, async(req,res)=>{
    try{
        req.admin.tokens = req.admin.tokens.filter((tok)=>{
            return tok.token != req.token
        })
        await req.admin.save()
        res.send() 
    } catch(e){
        res.send(e)
    }
})

  


module.exports = router 