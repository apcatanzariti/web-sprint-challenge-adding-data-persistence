// build your `/api/resources` router here

const express = require('express');
const router = express.Router();
const Resources = require('./model');

router.get('/', (req, res) => {
    Resources.get()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => {
        res.status(500).json({ message: 'something went wrong fetching resources' });
    })
});

router.post('/', (req, res) => {
    Resources.insert(req.body)
    .then(newResource => {
        res.status(200).json(newResource);
    })
    .catch(err => {
        res.status(500).json({ message: 'something went wrong adding this resource' });
    })
});

module.exports = router;