const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: `
        type todo{
            id:ID!
            text:String!
            completed:Boolean!            
        }
        type Query{
            todos:[todo!]!
        }
        type Mutation{
            addTodos(text:String!):todos!
            updateTodos(id:ID!,completed:Boolean!):todos!
            deleteTodos(id:ID!):todos!
        }

        `,
    resolvers: {},
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(5000, () => console.log("Server listening on port 5000!"));
}
