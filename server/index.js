const express = require('express')
const products = require('../products.json')
const getProducts = require('../server/getProducts')

const app = express()

const port = 8476

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProducts)
console.log(products)

app.listen(port, ()=>{
    console.log(`Server is still listening on port: ${port}`)
})