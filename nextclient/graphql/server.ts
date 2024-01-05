import { ApolloServer } from "apollo-server-micro";
import typeDefs from "./schema";
import resolvers from "./resolver";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default apolloServer;
