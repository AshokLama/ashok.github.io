
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send(`<form method="post" action="result">
        Name <input name="name">
        Age <input name="age">
        <input type="submit">
    </form>`);
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
app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});