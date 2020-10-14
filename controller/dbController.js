const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({
    siswa: [],
}).write();


function getAll() {
    return db
        .get("siswa")
        .value();
}

function get(id) {
    return db
        .get("siswa")
        .find({ id })
        .value();
}

function add(body) {
    db.get("siswa")
        .push(body)
        .write()
}

function edit(id, body) {
    const parsedId = parseInt(id)
    db.get("siswa")
        .find({ id: parsedId })
        .assign(body)
        .write()
}

function remove(id) {
    const parsedId = parseInt(id)
    db.get("siswa")
        .remove({ id: parsedId })
        .write()
}

const functions = {
    get,
    getAll,
    add,
    edit,
    remove
}
module.exports = functions