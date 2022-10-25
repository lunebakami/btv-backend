import express from 'express';
import path from 'path';
import 'reflect-metadata';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema, NonEmptyArray } from 'type-graphql';
import { UsersResolver } from './users/users.resolvers';

export const resolverArray = [UsersResolver] as NonEmptyArray<Function>;

class App {
  server: any;

  constructor() {
    this.init();

    this.graphql();
  }

  init() {
    this.server = express();
  }

  async graphql() {
    const schema = await buildSchema({
      resolvers: [UsersResolver],
      emitSchemaFile: path.resolve(__dirname, 'graphql/schema.gql'),
    });

    this.server.use(
      '/graphql',
      graphqlHTTP({
        schema: schema,
        graphiql: true,
      })
    );
  }
}

export default App;
