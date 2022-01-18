import * as express from 'express'
import * as path from 'path'
import * as morgan from 'morgan'

const app = express()

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/demo.test', (req, res) => {
  res.send('demo.test')
})

// app.get('/ab?cd', (req, res) => {
//   res.send(req.url)
// })

// app.get('/ab*cd', (req, res) => {
//   res.send(req.url)
// })

// app.get('/ab(cd)?e', (req, res) => {
//   res.send(req.url)
// })

// app.get(/a/, (req, res) => {
//   res.send(req.url)
// })

// app.get(/.*fly$/, (req, res) => {
//   res.send(req.url)
// })

// app.get('/user/:id', (req, res) => {
//   res.send(req.url)
// })

app.get('/user/:id(\\d+)', (req, res) => {
  res.send(req.url)
})

app.listen(1234)