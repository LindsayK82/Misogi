import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($title: String!) {
    addEvent(title: $title) {
      _id
      title
      users
      description
    }
  }
`;

export const ADD_USER_EVENT = gql`
  mutation addUserEvent($title: String!, $description: Stirng!) {
    addUserEvent(title: $title, description: $description) {
      token
      user {
      _id
      title
      description
      }
    }
  }
`;


  

