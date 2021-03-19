// build your `Resource` model here

const db = require('../../data/dbConfig');

function get() {
    return db('resources');
};

function getById(id) {
    return db('resources')
    .where('resource_id', id)
    .first();
};

async function insert(body) {
    const data = await db('resources').insert(body);
    const id = await data[0];
    const resource = await getById(id);

    return resource;
};

module.exports = {
    get,
    insert
};