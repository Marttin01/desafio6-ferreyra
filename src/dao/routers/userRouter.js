import { Router } from "express";
import { userModel } from "../models/userModel.js";
import { redirect } from "../../middlewares/redirect.js";

export const userRouter = Router()

userRouter.post('/register', async (req,res) =>{
    // try {
        let exist = await userModel.findOne({$and: [{email:req.body.email}, {password:req.body.password}]})
        if(exist){
            throw new Error('Usuario ya registrado')
        }

        if(req.body.email === 'adminCoder@coder.com' && req.body.password === 'adminCod3r123'){
            req.body.rol = 'admin'
        }else{
            req.body.rol= 'user'
        }

        // let userRol = req.body.rol
        // console.log(userRol)

        const userCreate = await userModel.create({...req.body,...req.body.rol})
        // console.log(userCreate)

        req.session.user = {
            first_name:userCreate.first_name,
            last_name:userCreate.last_name,
            email:userCreate.email,
            age:userCreate.age,
            password:userCreate.password,
            rol:req.body.rol          
        }
        
        res.status(200).json(userCreate)
        console.log(req.session)
        
        // res.send({status:'correct', payload:userCreate})    
    // } catch (error) {
    //     res.status(400).json({error:'Usuario no valido'})
    // }
})

userRouter.post('/login', async (req,res) => {
    const usuario = await userModel.findOne({$and: [{email:req.body.email}, {password:req.body.password}]})
        if(!usuario){
            throw new Error('Usuario no encontrado')
        }
        console.log(usuario)

        if(req.body.email === 'adminCoder@coder.com' && req.body.password === 'adminCod3r123'){
            req.body.rol = 'admin'
        }else{
            req.body.rol= 'user'
        }

        console.log(req.body)

        req.session.user = {
            first_name:usuario.first_name,
            last_name:usuario.last_name,
            email:usuario.email,
            age:usuario.age,
            password:usuario.password,
            rol:req.body.rol          
        }

        console.log(req.session)

        res.redirect('/profile')

})

userRouter.post('/logout' ,async (req,res) =>{
    req.session.destroy(err => {
        if(err){
            return console.log(err)
        }
        res.redirect('/login')
    })
})
