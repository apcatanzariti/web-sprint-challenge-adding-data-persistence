// build your `/api/projects` router here

const express = require('express');
const router = express.Router();
const Projects = require('./model');

router.get('/', async (req, res) => {
    try {
        const allProjectsData = await Projects.get();
        res.status(200).json(allProjectsData);
    } catch(err) {
        res.status(500).json({ message: 'something went wrong fetching projects' });
    }
});

router.get('/:id', (req, res) => {
    Projects.getById(req.params.id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json({ message: 'nope' });
    })
});

router.post('/', (req, res) => {
    Projects.insert(req.body)
    .then(newProject => {
        res.status(200).json(newProject);
    })
    .catch(err => {
        res.status(500).json({ message: 'something went wrong when adding this project' })
    })
})

module.exports = router;