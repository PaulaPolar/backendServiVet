const { GraphQLSchema, GraphQLObjectType, GraphQLBoolean } = require('graphql')

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

const defaultMutation = {
    type: GraphQLBoolean,
    description: "default mutation",
    resolve: () => { return true }
}

// Define MutationType
const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Mutations",
    fields: {
        defaultMutation,
    },
});

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});

