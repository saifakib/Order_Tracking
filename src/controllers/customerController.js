const Product = require('../models/Product')
const SellerProduct = require('../models/SellerProduct')

exports.getAllOrderProduct = (req, res) => {
    Product.find({ customer: req.user._id })
        .then(products => {
            res.status(200).json(products)
        })
        .catch(e => {
            res.status(401).json(e)
        })
}

exports.postOrderProduct = (req, res) => {
    console.log('gjksfd')
    const { quantity, cost } = req.body;
    const id = req.params.id;

    SellerProduct.findById(id)
        .then(selProduct => {
            console.log(selProduct.seller)
            if (selProduct.quantity < quantity) {
                res.status(401).json({
                    error: 'Only Limited Quantity Count'
                })
            }
            else if (selProduct.quantity == quantity) {
                const newProduct = new Product({
                    step: 1,
                    name: selProduct.name,
                    quantity,
                    cost,
                    sellar: selProduct.seller,
                    customer: req.user._id
                })
                selProduct.delete()
                newProduct.save()
                    .then(product => {
                        res.status(201).json(product)
                    })
                    .catch(e => {
                        res.status(401).json(e)
                    })
            }
            else {
                const newProduct = new Product({
                    step: 1,
                    name: selProduct.name,
                    quantity,
                    cost,
                    seller: selProduct.seller,
                    customer: req.user._id
                })
                selProduct.quantity -= quantity;
                selProduct.save()
                newProduct.save()
                    .then(product => {
                        res.status(201).json(product)
                    })
                    .catch(e => {
                        res.status(401).json(e)
                    })
            }
        })

}