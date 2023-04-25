import express from 'express'
import { engine } from 'express-handlebars'
import { apiRouter } from '../dao/routers/apiRouter.js'
import sesion from '../middlewares/session.js'
import { auth } from '../middlewares/autenticacion.js'

export const app = express()

app.use(express.static('./public'))
app.use(express.json())

app.use(sesion)
app.use('/api', apiRouter)

app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')


app.get('/register', async (req,res) =>{
    res.render('registro',{
        pageTitle:'Registro'
    })
})

app.get('/profile', auth, (req,res) =>{


    res.render('profile',{
        pageTitle:`Perfil de: ${req.session.user.first_name}`,
        welcome:`Bienvenido devuelta a tu perfil ${req.session.user.first_name}`,
        user:req.session.user,
        name:req.session.user.first_name,
        last_name:req.session.user.last_name,
        email:req.session.user.email,
        age:req.session.user.age,
        rol:req.session.user.rol
    })
})

app.get('/login', async (req,res) => {

    res.render('login', {
        pageTitle:'Login'
    })
})








