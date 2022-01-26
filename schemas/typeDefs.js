const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Item {
    _id: ID!
    text: String!
    isDone: Boolean!
  }
  type Query {
    items: [Item!]
  }
  type Mutation {
    addItem(text: String!, isDone: Boolean!): Item!
    deleteItem(_id: ID!): Item
  }
`

module.exports = typeDefs
