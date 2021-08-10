const express = require('express');
const url = require('url');
const path = require('path');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({extended: false}));

app.use(session({
    'secret': 'salt for cookie',
    'resave': false,
    'saveUninitialized': false
}));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/result', (req, res) => {
    req.session[req.body.key] = 'Name: ' + req.body.name + ' Age: ' + req.body.age;

    res.redirect(url.format({
        pathname: "/output"
    }));
});

app.get('/output', function (req, res) {
    let view = "<ol>";
    for (const key in req.session) {
        if (key === 'cookie') continue;
        view += `<li>${req.session[key]}</li>`;
    }
    view += "</ol><a href='/'>back</a>";
    res.send(view);
});

app.listen(80, () => {
    console.log('Your Server is running on 80');
});