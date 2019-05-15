const {mongoose, User} = require("../models/mongoose")
var express = require('express');
var router = express.Router();

router.post("/", (request,response) => {
    const {
        username,
        password
    } = request.body
    const data = {
        username,
        password,
        token: Math.random().toString(16).substr(2),
        date: +new Date
    }
    const account = new User(data)
    account.save()
    response.send(JSON.stringify(data))
})

module.exports = router;