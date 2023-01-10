const server = require('ronin-server')
const mocks = require('ronin-mocks')

const app = server.server()

app.use('/', mocks.server(app.Router(), false, true))
app.start()

console.log(`Started as ${process.env.NODE_ENV}`)