import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password
      events {
        _id
        title
        description
      }
    }
  }
`;

export const QUERY_EVENTS = gql`
  query getEvents {
    events {
      _id
      title
      description
    }
  }
`;

export const QUERY_SINGLE_EVENT = gql`
  query getSingleEvent($eventId: ID!) {
    event(eventId: $eventId) {
      _id
      title
      users
      time
      description
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      events {
        _id
        title
        users
        time 
        description
      }
    }
  }
`;
