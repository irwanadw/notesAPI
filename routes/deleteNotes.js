const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.delete("/siswa", (req, res) => {
    const body = req.body;
    const id = body.id;
    const parsedId = parseInt(id)

    const getData = db.get("siswa")

    if (getData) {
        db.remove("siswa")
        res.send('Ok')
    } else {
        res.send(404).send('data not found')

    }
})

module.exports = app