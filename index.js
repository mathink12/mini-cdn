const express = require('express')
const getDirTree = require('./utils')

const port = 3000
const app = express()

app.use('/', express.static('static'))
app.use('/libs', express.static('libs'))

app.get('/lib/list', (req, res) => {
  res.send(getDirTree('./libs'))
})

app.listen(port, () => {
  console.log(`Mini CDN server at http://localhost:${port}`)
})
