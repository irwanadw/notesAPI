const express = require('express')
const app = express.Router()
const db = require('../controller/dbController');

app.get("/siswa", (req, res) => {
    let result = db.getAll()
    res.send(result)
})

module.exports = app