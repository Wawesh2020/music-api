const express = require('express')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', () => {
  return response.render('index')
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1339...')// eslint-disable-line no-console
})
