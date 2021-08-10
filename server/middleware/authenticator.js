import jwt from 'json-web-token'

export default authenticator = async (req, res, next) =>{

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decodedToken = await jwt.verify(token, process.env.JWT_SECRET)
            console.log(decodedToken)
            next()

        } catch (error) {
            res.status(401)
            console.log('Incorrect user credentials')
            res.json({message : 'Incorrect user credentials'})
        }
    } else {
        res.status(401)
        console.log('Incorrect user credentials')
        res.json({message : 'Incorrect user credentials'})
    }

   
}