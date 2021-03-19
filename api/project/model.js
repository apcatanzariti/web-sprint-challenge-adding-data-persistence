// build your `Project` model here

const db = require('../../data/dbConfig');

function getById(id) {
    return db('projects')
    .where('project_id', id)
    .first();
};

async function get() {
    const data = await db('projects');

    const projectsData = data.map(project => {
        return {
            project_id: project.project_id,
            project_name: project.project_name,
            project_description: project.project_description,
            project_completed: project.project_completed === 0 ? false : true
        }
    })

    return projectsData;
};

async function insert(body) {
    const data = await db('projects').insert(body);
    const id = await data[0];
    const project = await getById(id);

    return {
        project_id: project.project_id,
        project_name: project.project_name,
        project_description: project.project_description,
        project_completed: project.project_completed === 0 ? false : true
    }
};

module.exports = {
    get,
    getById,
    insert
};