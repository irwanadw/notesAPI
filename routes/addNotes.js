const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.post("/siswa", (req, res) => {
    const body = req.body;
    const id = body.id
    const parsedId = parseInt(id)
    const getData = db.get("siswa")

    if (getData) {
        db.add(body)
        res.send('ok')

    } else {
        res.status(409).send('unable to add new')

    }
})

module.exports = app