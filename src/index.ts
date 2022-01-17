import * as express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(1234)