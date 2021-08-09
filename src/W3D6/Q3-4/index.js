const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));

const products = [
    { id: 1, name: 'Mobile', description: 'iPhone', price: 40000 },
    { id: 2, name: 'Laptop', description: 'Hp', price: 50000 },
    { id: 3, name: 'Computer', description: 'Dell', price: 60000 }]

const cart =[ { id: 1, name: 'Mobile', description: 'iPhone', price: 40000 },
    { id: 2, name: 'Laptop', description: 'Hp', price: 50000 }];

app.get('/products', (req, res) => {
    res.render("Products", {products : products});

});

app.post('/addToCart', (req, res) => {
    let id = req.body.id;
    console.log(id);
    res.redirect(303, "products");

});
app.get('/myCart', (req, res) => {
    res.render("myCart", {cart : cart});

});
app.listen(3000);









