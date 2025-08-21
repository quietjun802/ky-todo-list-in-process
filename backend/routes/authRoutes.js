const router = require("express").Router()
const jwt = require('jsonwebtoken')
const {v4:uuidv4}=require('uuid')


router.post('/guest',(req,res)=>{
    try {

        if(!process.env.JWT_SECRET){
            return res.status(500).json({message:"서버 설정 오류 : JWT_SECRET이 없습니다."})
        }

        const uid =(req.body && req.body.deviceId)? String(req.body.deviceId):uuidv4()

    } catch (error) {
        console.error("게스트 인증 오류",error)
        return res.status(500).json({message:"게스트 인증 중 오류 발생"})
    }
})

module.exports=router