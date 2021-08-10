const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('/', (req, res) => {
    const date_ob = new Date();
    const hours = date_ob.getHours();
    let style = "night.css";
    if (hours >= 6 && hours < 18) {
        style = "day.css";
    }
    res.send(`
    <!DOCTYPE html>
    <html lang='en'>
        <head>
            <meta charset="utf-8">
            <title>Name and age</title>
            <link rel="stylesheet" href="css/${style}">
        </head>
        <body>
            <form method="post" action="result">
                Name <input name="name">
                Age <input name="age">
                <input type="submit">
            </form>
        </body>
    </html>`);
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "unknown";
    }
    if (!age) {
        age = "unknown"
    }
    res.send(`Welcome ${name}, age ${age}`);
});
app.listen(3000);