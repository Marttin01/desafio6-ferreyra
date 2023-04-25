import MongoStore from 'connect-mongo'
import session from 'express-session'
import { MONGO_CNX } from '../config/mongodb.config.js'

const sesion = session({
    store: MongoStore.create({mongoUrl:MONGO_CNX}),
    saveUninitialized:false,
    resave:false,
    secret:'SESSION_SECRET'
})

export default sesion
