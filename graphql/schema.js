const { GraphQLSchema, GraphQLObjectType } = require('graphql')

// Queries
const { usuario, usuarios } = require("./queries");

// Mutations
const {
    register,
    login,
} = require("./mutations");

// Define QueryType
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "Queries",
    fields: {
        usuario,
        usuarios
    },
});

// Define MutationType
const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Mutations",
    fields: {
        register,
        login,
    },
});

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});

