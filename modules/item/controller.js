const Item = require('../../models/item')

const { isValidId } = require('../../utils/validator')

const listItem = async(req, res) => {
    const items = await Item.find({}).sort({createdAt: -1})
    res.status(200).json(items)
}

const getItem = async(req, res) => {
    const { id } = req.params
    
    if (!isValidId(id)) {
        return res.status(404).json({err: "Not found"})
    }

    const item = await Item.findById(id)
    
    if (!item) {
        return res.status(404).json({err: "Not found"})
    }
    res.status(200).json(item)
}

const createItem = async(req, res) => {
    const {label, quantity} = req.body

    try {
        const item = await  Item.create({label, quantity})
        res.status(200).json(item)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteItem = async(req, res) => {
    const { id } = req.params
    
    if (!isValidId(id)) {
        return res.status(404).json({err: "Not found"})
    }

    const item = await  Item.findOneAndDelete({_id:id})

    if (!item) {
        return res.status(404).json({err: "Not found"})
    }
    res.status(200).json(item)
}

const updateItem = async(req, res) => {
    const { id } = req.params
    
    if (!isValidId(id)) {
        return res.status(404).json({err: "Not found"})
    }

    const item = await  Item.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if (!item) {
        return res.status(404).json({err: "Not found"})
    }
    res.status(200).json(item)
}



module.exports = {
    createItem,
    listItem,
    getItem,
    deleteItem,
    updateItem
}