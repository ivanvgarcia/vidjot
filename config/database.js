require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI: `mongodb://${DB_USER}:${DB_PASSWORD}@ds211083.mlab.com:11083/vidjot-prod`}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}