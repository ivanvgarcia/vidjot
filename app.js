const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const port = process.env.PORT || 3000;

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Index Route
app.get('/', (req, res) => {
    const title = "Welcome";
    res.render('index', {
        title: title
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});