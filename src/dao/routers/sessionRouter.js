import { Router } from "express";
import session from "express-session";
import { userModel } from "../models/userModel.js";

export const sessionRouter = Router()

sessionRouter.post('/', async (req,res) =>{
    // try {
    
  
    //     if(req.session.user){
    //         res.redirect('http://localhost:8080/profile')
    //     }else{
    //         req.session.user = {
    //             _id: exist._id,
    //             first_name: exist.first_name,
    //             last_name: exist.last_name,
    //             email: exist.email,
    //             age: exist.age,
    //             password: exist.password            
    //         }
    //         // res.send({status:'correct',payload:exist})
    //     }
        

    // } catch (error) {
    //     res.status(400).json({error:'Usuario no encontrado'})
    // }
})