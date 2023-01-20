const { AuthenticationError } = require('apollo-server-express');
const { User, Events } = require('../models');
const { signToken } = require('../util/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('events');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('events');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById({ _id: context.user._id }).populate('events');
      }
      // throw new AuthenticationError('You need to be logged in!');
    },
    events: async (parent, args) => {
      const events=await Events.find()
      console.log(events)
      return events;
    // events: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Event.find(params).sort({ createdAt: -1 });

    },
    event: async (parent, { title }) => {
      return Events.findOne({ title });
    },
    getMyEvents: async (parent, args, context) => {
      if (context.user) {
        return Events.find({ users: context.username });
      }
      // throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const isCorrectPassword = await user.isCorrectPassword(password);

      if (!isCorrectPassword) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    addEvent: async (parent, { title, description }) => {
      const newEvent = {
        title,
        
        description,
      };
      return Events.create(newEvent);
    },
    deleteMe: async (parent, args, context) => {
      if (context.user) {
        await User.findByIdAndDelete(context.user._id);
        return 'User deleted';
      }
      // throw new AuthenticationError('You need to be logged in!');
    },
    addMeToEvent: async (parent, { title }, context) => {
      if (context.user) {
        const event = await Events.findOne({ title }).populate('users');
        if (!event) {
          throw new UserInputError('No event of that title found');
        }
        let inEvent = false;
        event.users.forEach((user) => {
          if (user.username == context.user.username) {
            inEvent = true;
          }
        });
        if (!inEvent) {
          event.users.push(context.user);
        }
        return event.save();
      }
      // throw new AuthenticationError('You need to be logged in!');
    },
    removeMeFromEvent: async (parent, { title }, context) => {
      if (context.user) {
        const event = await Event.findOne({ title }).populate('users');
        if (!event) {
          throw new UserInputError('No event of that title found');
        }
        event.users = event.users.filter(
          (user) => user._id != context.user._id
        );
        return event.save();
      }
      // throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;