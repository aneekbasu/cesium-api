import express from 'express'
import headers from './app/platform-middlewares/index.mjs'
import routes from './app/routes/routes.mjs'
import logger from 'morgan'
const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))
app.set('port', process.env.SERVER_PORT || 3000)
app.use(headers)
app.use(logger('dev'))

let server = app.listen(app.get('port'))
console.log('Server is listening on port ' + server.address().port)

app.get('/', (req, res) => {
  res.sendStatus(200)
})
app.use('/api/v1/', routes)

export default app
