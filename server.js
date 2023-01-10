const server = require('ronin-server')
const database = require('ronin-database')
const mocks = require('ronin-mocks')

async function main() {
  try {
    await database.connect(process.env.DB_CONNECTION)

    const app = server.server({
      port: process.env.PORT
    })

    app.use('/foo', (req, res) => {
      return res.json({ "foo": "bar" })
    })

    app.use('/', mocks.server(app.Router()))

    const result = await app.start()

    console.info(result)
    console.log(`Started as ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error)
  }
}

main()