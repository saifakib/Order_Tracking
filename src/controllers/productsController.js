const SellerProduct = require('../models//SellerProduct')
const Product = require('../models/Product')

exports.getSellerProduct = async (req, res) => {
    try {
        await SellerProduct.find({})
            .then(products => {
                res.status(200).json(products)
            })
            .catch(err => {
                res.status(400).json({ err })
            })

    } catch (e) {
        res.status(501).json(e)
    }
}

exports.getSigleProduct = async (req, res) => {
    console.log(req.params.id)
    try {
        await SellerProduct.find({ _id: req.params.id })
            .then(product => {
                res.status(200).json(product)
            })
            .catch(err => {
                res.status(400).json({ err })
            })
    } catch (e) {
        res.status(501).json(e)
    }
}