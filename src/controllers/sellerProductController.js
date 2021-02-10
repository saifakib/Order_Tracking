const SellerProduct = require('../models//SellerProduct')

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

exports.postSellerProduct = async (req, res) => {
    const { quantity, price, product_pic } = req.body
    const product = new SellerProduct({
        quantity,
        product_pic,
        price,
        seller: req.user._id
    })

    try {
        product.save()
            .then(product => {
                res.status(201).json(product)
            })
            .catch(err => res.status(401).json(err))
    } catch (e) {
        res.status(501).json(e)
    }
}