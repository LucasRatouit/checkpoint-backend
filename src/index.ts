import { buildSchema } from "type-graphql";
import dataSource from "./db/dataSource";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import CountryResolver from "./resolvers/country";

const start = async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
};

start().catch((error) => console.error("Erreur lors du lancement: ", error));
