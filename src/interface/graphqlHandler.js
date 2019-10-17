const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    getBooks: [Book]
  }
`

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
]

const resolvers = {
  Query: {
    getBooks: () => books
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

module.exports = server.createHandler()
