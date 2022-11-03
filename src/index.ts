import App from './app';

const app = new App().server;

const PORT = process.env.PORT || 8000;

app.listen(PORT);

console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
