const { GraphQLList, GraphQLID } = require('graphql');
const graphql = require('graphql');
const mongoose = require('mongoose');

const { GraphQLObjectType } = graphql;

const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      },
    },
  }),
});

module.exports = RootQueryType;
