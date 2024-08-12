const { Category } = require("../models/Category");

exports.createCategory = async (req, res) => {
    const category = new Category(req.body)
    try {
        const doc = await category.save();
        res.status(201).json(doc);

    } catch (err) {
        res.status(400).json(err);

    }

}

exports.fetchCategories = async (req, res) => {

    try {
        const category = await Category.find({})
        res.status(200).json(category);

    } catch (err) {
        res.status(400).json(err);

    }

}

