// build your `/api/tasks` router here

const express = require('express');
const router = express.Router();
const Tasks = require('./model');

router.get('/', (req, res) => {
    Tasks.get()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        res.status(500).json({ message: 'something went wrong while fetching tasks' });
    })
});

router.post('/', (req, res) => {
    Tasks.insert(req.body)
    .then(newTask => {
        res.status(200).json(newTask);
    })
    .catch(err => {
        res.status(500).json({ message: 'something went wrong while adding this task' });
    })
});

module.exports = router;