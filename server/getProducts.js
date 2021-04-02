const products = require('../products.json')


// const getProducts = (req, res) => {
//     const item = products.find((elem) => elem.id === parseInt(req.params.id))
//     if (!item) {
//         return res.status(500).send('Item is not in the list')
//     } else {
//     res.status(200).send(item)
//     }
// }

const getProducts = (req, res) => {
    const { price } = req.query

    if (price) {
        const items = products.filter(e => e.price <= parseInt(price))
        return res.status(200).send(items)
    } 
}



// const getProducts = (req, res) => {
//     if (req.query.price){
//         const items = products.filter((elem) => elem.price <= parseInt(req.query.price))
//         return res.status(200).send(items)
//     }
// }



module.exports = getProducts