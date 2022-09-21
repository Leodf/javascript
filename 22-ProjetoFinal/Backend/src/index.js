const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

require('./config/mongodb')

const PORTA = 3000

app.db = db
app.mongoose = mongoose

consign()
    .include('./src/config/passport.js')
    .then('./src/config/middlewares.js')
    .then('./src/api/validation.js')
    .then('./src/api')
    .then('./src/schedule')
    .then('./src/config/routes.js')
    .into(app)


app.listen(PORTA, () => {
    console.log(`backend executando na porta ${PORTA}`)
})