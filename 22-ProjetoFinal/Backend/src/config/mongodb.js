
const { mongodb } = require('../../.env')

const mongoose = require('mongoose')
mongoose.connect(`mongodb://${mongodb.username}:${mongodb.password}@${mongodb.host}:${mongodb.port}/?authMechanism=DEFAULT`, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        const msg = 'Erro! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })