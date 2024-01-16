
const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(req, res, next) {
    const token = req.header('authorization') ? req.header('authorization').split(" ")[1] : "";
    if (!token) return res.status(200).json({ status: "ERROR", msg: 'No token, authorization denied' });
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(200).json({ msg: 'Token is not valid' });
    }
}

module.exports = auth;
