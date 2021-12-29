const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User {
        id: String
        username: String
    }

    type Pet {
        id: String
        createdAt: Int
        name: String
        type: String
    }

    type Query {
        pets: [Pet!]!
    }
`;

module.exports = typeDefs
