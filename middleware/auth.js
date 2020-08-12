const webtoken =  require('jsonwebtoken')
const config = require('config')

module.exports = function(req,res,next) {
    // get toekn from header.
    const token = req.header('x-auth-token');

    // check if there isnt a token.
    if(!token) {
        return res.status(401).json({msg: 'NO token , access denied'})
    }
    

    try{
        const decoded = webtoken.verify(token,config.get('webtokensecret'))

        req.user = decoded.user;
        

        next();
    }catch (err) {
            res.status(401).json({msg: 'Token not verified, access denied'})
    }
}