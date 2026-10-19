

const checkAuth = (req, res, next) => {
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        console.log('Hola');
        return next();
    }

    const error = new Error("Token no válido o inexistente")
    res.status(403).json({ msg: error.message });
}

export default checkAuth;