import crypto from 'crypto';
const dotenv = require('dotenv').config();

const SECRET = process.env['SECRET']
export const randomToken = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};
