const { Item } = require('../models')

const resolvers = {
  Query: {
    items: async () => await Item.find({})
  },
  Mutation: {
    addItem: async (parent, item) => await Item.create(item),
    deleteItem: async (parent, { _id }) => await Item.findByIdAndDelete(_id)
  }
}

module.exports = resolvers
