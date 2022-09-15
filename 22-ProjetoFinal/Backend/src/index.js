const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

const PORTA = 3000
app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)


app.listen(PORTA, () => {
    console.log(`backend executando na porta ${PORTA}`)
})