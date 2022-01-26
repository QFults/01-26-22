const express = require('express')
const { join } = require('path')

const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schemas')

const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

async function serverStart () {
  await server.start()
  server.applyMiddleware({ app })
}

serverStart()
  .then(() => require('./db'))
  .then(() => app.listen(3001))
  .catch(err => console.log(err))
