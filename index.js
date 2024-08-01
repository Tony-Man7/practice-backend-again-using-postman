const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express();

//midlewatre
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoute);

app.get('/', function (req, res) {
  res.send('Hello thick tac')
});

// create product
//update product 
// delete product

app.listen(3000, () => {
    console.log('server is running i think')
})

mongoose.connect("mongodb+srv://manansalaant7:3uk5BsMMMz9r8rMD@nodeapi.j2rxc9o.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeAPI")
.then(() => {
    console.log("connected to Database");
})
.catch(() => {
    console.log("Connection Failed")
})