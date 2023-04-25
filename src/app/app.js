import express from 'express'
import { engine } from 'express-handlebars'
import { apiRouter } from '../dao/routers/apiRouter.js'
import sesion from '../middlewares/session.js'
import { auth } from '../middlewares/autenticacion.js'
import { loginAuth } from '../middlewares/loginAutenticacion.js'
import { userProfile } from '../controlers/profile.controller.js'

export const app = express()

app.use(express.static('./public'))
app.use(express.json())

app.use(sesion)
app.use('/api', apiRouter)

app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

app.get('/', (req,res) =>{
    res.render('inicio',{
        pageTitle:'Inicio'
    })
})


app.get('/register', (req,res) =>{
    res.render('registro',{
        pageTitle:'Registro'
    })
})

app.get('/profile',  auth, userProfile)

app.get('/login',loginAuth , (req,res) => {

    res.render('login', {
        pageTitle:'Login'
    })
})








