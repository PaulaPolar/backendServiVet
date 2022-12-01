const { GraphQLSchema, GraphQLObjectType, GraphQLBoolean } = require('graphql')

// Queries
//const { usuario, usuarios } = require("./queries");

// Mutations
const {
    register,
    login,
} = require("./mutations");

const defaultQuery = {
    type: GraphQLBoolean,
    description: "default query",
    resolve: () => { return true }
}

// Define QueryType
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "Queries",
    fields: {
        defaultQuery
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

