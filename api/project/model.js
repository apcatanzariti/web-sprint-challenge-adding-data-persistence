// build your `Project` model here

const db = require('../../data/dbConfig');

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

function insert() {
    return null;
};

module.exports = {
    get,
    insert
};