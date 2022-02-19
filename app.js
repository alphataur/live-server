const express = require("express")
const path = require("path")
const app = express()

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "templates"))

app.get("/", (req, res) => {
  res.render("home")
})

app.listen(3000, () => console.log("server running at port 3000"))
