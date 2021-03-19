// build your `Task` model here

const db = require('../../data/dbConfig');

async function get() {
    const data = await 
    db.select('*')
    .from('tasks')
    .join('projects', 'tasks.project_id', 'projects.project_id')

    const tasksData = data.map(task => {
        return {
            task_id: task.task_id,
            task_description: task.task_description,
            task_notes: task.task_notes,
            task_completed: task.task_completed === 0 ? false : true,
            project_name: task.project_name,
            project_description: task.project_description
        }
    })

    return tasksData;
};

function getById(id) {
    return db('tasks')
    .where('task_id', id)
    .first();
};

async function insert(body) {
    const data = await db('tasks').insert(body);
    const id = await data[0];
    const task = await getById(id);

    return {
        task_id: task.task_id,
        task_description: task.task_description,
        task_notes: task.task_notes,
        task_completed: task.task_completed === 0 ? false : true,
        project_id: task.project_id
    }
};

module.exports = {
    get,
    insert
};