export function userProfile(req,res) {


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
}