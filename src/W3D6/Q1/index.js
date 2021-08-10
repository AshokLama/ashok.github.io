const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('/', (req, res) => {
    const date = new Date();
    let style = date.getHours() >= 6 && date.getHours() <= 18 ? 'day.css' : 'night.css';
    res.render("index", {
        time: date.toTimeString(),
        style: style
    });
});
app.listen(3001);
console.log('Your Server is running on 3001');