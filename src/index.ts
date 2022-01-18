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

app.listen(1234)