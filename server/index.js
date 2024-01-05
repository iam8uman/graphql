const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const { default: axios } = require("axios");

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: `
        type Post {
            id: ID!
            title: String!
            body: String!            
        }
        type Query {
            Posts: [Post]!
        }
        type Mutation {
            addPosts(text: String!): Post!
            updatePosts(id: ID!, completed: Boolean!): Post!
            deletePosts(id: ID!): Post!
        }
    `,
    resolvers: {
      Query: {
        Posts: async() => (await axios.get("https://jsonplaceholder.typicode.com/posts")).data
      },
      // Mutation:{
      //   addPosts: (_, {text}) => {
      //     const Post = {
      //       id: "2",
      //       text,
      //       completed: false
      //     }
      //     return Post;
      //   },
      // }
    },
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(5000, () => console.log("Server listening on port 5000!"));
}

startApolloServer();
