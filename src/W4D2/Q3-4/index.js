const express = require('express');
const path = require('path');
const url = require('url');
const session = require('express-session')
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "view"));

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'salt for cookie signing',
}));

const products = [
    { id: 1, name: 'Mobile', description: 'iPhone', price: 40000 },
    { id: 2, name: 'Laptop', description: 'Hp', price: 50000 },
    { id: 3, name: 'Computer', description: 'Dell', price: 60000 }]

app.use(function (req, res, next) {
    if (!req.session.cart) {
        req.session.cart = {};
    }
    next();
});

app.get('/Mobile/1', (req, res) => {
    let prod = [{...products.find(e => e.id === 1)}];

    res.render("Products", {prods : prod, count : getTotalCountInCart(req.session.cart)});
});

app.get('/Laptop/2', (req, res) => {
    let prod = [{...products.find(e => e.id === 2)}];
    res.render("Products", {prods : prod, count : getTotalCountInCart(req.session.cart)});
});

app.get('/Computer/3', (req, res) => {
    let prod = [{...products.find(e => e.id === 3)}];
    res.render("Products", {prods: prod, count : getTotalCountInCart(req.session.cart)});
});


app.get('/products', (req, res) => {
    res.render("Products", {prods : products, count : getTotalCountInCart(req.session.cart)});

});

app.post('/addToCart', (req, res, next) => {
    console.log('req.body.id ===' + req.body.id);
    const item = products.find(e => e.id === parseInt(req.body.id));
    let exist = req.session.cart[item.id];
    if (exist) {
        console.log(req.session.cart);
        exist.quantity += 1;
        exist.price += item.price;
    } else {

        item.quantity = 1;
        req.session.cart[item.id] = item;
    }
    console.log(req.session.cart);
    let count = getTotalCountInCart(req.session.cart);
    console.log(count);
    res.status(200);
    res.json({ "total": count });
});

function getTotalCountInCart(cart) {
    let quantity = 0;
    for (key in cart) {
        quantity += cart[key].quantity;
    }
    return quantity;
}


app.get('/shoppingcart', (req, res) => {

    res.render("shoppingcart", {cart : req.session.cart, count : getTotalCountInCart(req.session.cart)});
});



app.listen(3000);