const express = require('express')
const app = express()
const PORT = parseInt(process.env.PORT || 3000)
const path = require('path')

app.get('/', (req, res) => {
  res.redirect("/index.html")
})

app.use("/", express.static(path.join(__dirname, "dist")))

app.listen(PORT, () => {
  console.log(`vuetest listening at ${PORT}`)
})
