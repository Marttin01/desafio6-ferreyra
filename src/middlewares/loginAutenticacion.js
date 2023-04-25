export function loginAuth (req,res,next){
    if(req.session.user){
        return res.redirect('/profile')
    }else{
        next()
    }
}