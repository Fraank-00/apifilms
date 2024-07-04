const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    if (!req.headers['token-user']) {
        return res.status(400).json({ error: 'Necesitas incluir el token-user' });
    }

    const userToken = req.headers['token-user'];
    let payload = {};

    try {
        // Decodificar el token y verificar la firma
        payload = jwt.decode(userToken, 'nueva_frase_secreta');
        console.log('Token decodificado:', payload);
    } catch (error) {
        console.error('Error al decodificar el token:', error.message);
        return res.status(401).json({ error: 'El token es incorrecto' });
    }

    const currentTime = moment().unix();
    console.log('Tiempo actual:', currentTime);
    console.log('Tiempo de expiración del token:', payload.expiredAt);

    if (payload.expiredAt < currentTime) {
        return res.status(401).json({ error: 'El token ha expirado' });
    }

    req.usuarioId = payload.usuarioId;
    next();
};

module.exports = { checkToken };
