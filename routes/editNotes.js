const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.patch("/siswa", (req, res) => {
    const body = req.body;
    const id = body.id;
    const parsedId = parseInt(id)
    const getData = db.get("siswa")
    db.edit(id, body)
        .find({ parsedId })
        .value()

    if (getData) {
        db.get("siswa")
            .find({ id: parsedId })
            .assign(body)
            .write();
        res.send(body)
    } else {
        res.status(404).send('data not found')
    }
})

module.exports = app
