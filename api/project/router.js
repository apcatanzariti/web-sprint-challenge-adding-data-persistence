// build your `/api/projects` router here

const express = require('express');
const router = express.Router();
const Projects = require('./model');

router.get('/', async (req, res) => {
    try {
        const allProjectsData = await Projects.get();
        res.status(200).json(allProjectsData);
    } catch(err) {
        res.status(500).json({ message: 'something went wrong...'});
    }
});

module.exports = router;