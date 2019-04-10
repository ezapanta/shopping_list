const express = require('express');
const router = express.Router();

// Item Modem
const Item = require('../../models/Item');

// GET api/items
// @desc get all items
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// POST api/items
// @desc create a post
router.post('/', (req, res) => {
    // we can refer to the user's input as req.body.name bc of body-parser
    // Our Item Schema is automatically generated, user does not need to supply it
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
        .then( item => res.json(item));
});

// DELETE api/items
// @desc remove an item by id
router.delete('/:id', (req, res) => {
    // findById is from mongoose
    Item.findById(req.params.id)
        .then( item => item.remove()
            .then(() => res.json({ success: true }))
        )
        .catch( err => res.status(404).json({ success: false }));
})




module.exports = router;