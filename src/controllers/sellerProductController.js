const SellerProduct = require('../models//SellerProduct')
const Product = require('../models/Product')
const User = require('../models/User')


exports.getAllOrderProduct = (req, res) => {
    Product.find({ sellar: req.user._id })
        .then(products => {
            res.status(200).json(products)
        })
        .catch(e => {
            res.status(401).json(e)
        })
}


exports.postSellerProduct = async (req, res) => {
    const { quantity, name, price, product_pic } = req.body
    const product = new SellerProduct({
        quantity,
        name,
        product_pic,
        price,
        seller: req.user._id
    })

    try {
        let createProduct = await product.save()
        const _id = req.user._id
        await User.findByIdAndUpdate(
            { _id: _id },
            { $push: { 'products': createProduct._id } }
        )
            .then(createProduct => {
                res.status(201).json(createProduct)
            })
            .catch(err => res.status(401).json(err))
    } catch (e) {
        res.status(501).json(e)
    }
}


exports.pickupProduct = (req, res, next) => {
    let id = req.params.id;

    Product.findById(id)
        .then(product => {
            product.step = 2
            product.save()
                .then(success => {
                    res.json({
                        message: 'Product Updata Successfull',
                        product
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Can not find',
                error: err
            })
        })
};

exports.deliverProduct = (req, res, next) => {
    let id = req.params.id;

    Product.findById(id)
        .then(product => {
            product.step = 3
            product.save()
                .then(success => {
                    res.json({
                        message: 'Product Updata Successfull',
                        product
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Can not find',
                error: err
            })
        })
};