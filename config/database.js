require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI: process.env.PRODUCTION_DB}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}