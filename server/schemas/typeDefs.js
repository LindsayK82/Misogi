const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Event {
    title: String!

    time: String!
    description: String
  }

  type Query {
    # Get all users
    users: [User]
    # Get one user
    user(username: String!): User
    # Get information about the current user base on web token
    me: User
    # Get all events
    events: [Event]
    # Get one event
    event(title: String!): Event
    # Get the events the current logged in user has
    getMyEvents: [Event]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(
      title: String!
      time: String!

      description: String
    ): Event
    deleteMe: String
    addMeToEvent(title: String!): Event
    removeMeFromEvent(title: String!): Event
  }
`;
module.exports = typeDefs;

