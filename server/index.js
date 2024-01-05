const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: `
        type Todo {
            id: ID!
            text: String!
            completed: Boolean!            
        }
        type Query {
            todos: [Todo]!
        }
        type Mutation {
            addTodos(text: String!): Todo!
            updateTodos(id: ID!, completed: Boolean!): Todo!
            deleteTodos(id: ID!): Todo!
        }
    `,
    resolvers: {
      Query: {
        todos: () => [{ id: "1", text: "hello", completed: false }]
      },
    },
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(5000, () => console.log("Server listening on port 5000!"));
}

startApolloServer();
