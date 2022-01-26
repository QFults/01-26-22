mutation {
  addItem(text: "Take out trash", isDone: true) {
    text
    isDone
    _id
  }
}

query {
  items {
    _id
    text
    isDone
  }
}