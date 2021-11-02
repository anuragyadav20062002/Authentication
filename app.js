//jshint esversion:6
const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const { appendFileSync } = require("fs")
const mongoose = require("mongoose")

const app = express()

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true })

const userSchema = {
  email: String,
  password: String,
}

const User = new mongoose.model("User", userSchema)

app.get("/", function (req, res) {
  res.render("home")
})

app.get("/login", function (req, res) {
  res.render("login")
})

app.get("/register", function (req, res) {
  res.render("register")
})
//////listening//////

app.listen(3000, function () {
  console.log("server started successfully on port 3000")
})
