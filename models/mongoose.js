/* 
* 建立数据库连接
*/
const mongoose = require("mongoose")
const DB_URL = "mongodb://localhost:27017/db"
mongoose.connect(DB_URL)

const DB = mongoose.connection
DB.on("error", () => {
    console.error.bind(console, 'connection error:')
})
DB.once("open",() => {
    console.log("Successful connection to " + DB_URL)
})

const Schema = mongoose.Schema
const user = {
    username: String,
    password: String,
    token: String,
    date: Number
}
const userSchema = Schema(user)
const User = mongoose.model("User",userSchema)

module.exports = {mongoose,User}