const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001; // backend lives on 3001 by default
const db = require("./config/connection"); // database connection
const path = require("path");

// apollo server requires
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./util/auth");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// middleware for talking to other things and json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up the build as our static assets if we are in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// send the index.html file always
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// define the way to start the server
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// actually start the server
startApolloServer(typeDefs, resolvers);
