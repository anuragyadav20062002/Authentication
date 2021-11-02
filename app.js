//jshint esversion:6
const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const { appendFileSync } = require("fs")

const app = express()

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//////listening//////

app.listen(3000, function () {
  console.log("server started successfully on port 3000")
})
