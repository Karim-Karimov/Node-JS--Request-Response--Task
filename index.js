const express = require("express");

const app = express();

const products = [
    {
        id: 1,
        name: "Product 1",
        price: 30,
        quantity: 500
    },
    {
        id: 2,
        name: "Product 2",
        price: 8,
        quantity: 2000
    },
    {
        id: 3,
        name: "Product 3",
        price: 10,
        quantity: 30
    },
    {
        id: 4,
        name: "Product 4",
        price: 5,
        quantity: 4000
    },
    {
        id: 5,
        name: "Product 5",
        price: 3,
        quantity: 6000
    },
    {
        id: 6,
        name: "Product 6",
        price: 500,
        quantity: 80
    },
    {
        id: 7,
        name: "Product 7",
        price: 30,
        quantity: 100
    }
]

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.get("/products", (req, res) => {
    const count = +req.query.count;
    const offset = +req.query.offset;
    
    if (count && offset) {
        res.send(products.slice(offset, offset + count));
      } else if (count) {
        res.end();
      } else if (offset) {
        res.end();
      } else {
        res.send(products);
      }
})

app.get("/products/:id", (req, res) => {
    const product = products.find(item => item.id == req.params.id);
    if (!product) {
        res.status(404).send();
      }
    res.send(product);
})


app.listen(8000, () => {
    console.log("Server started...");
})