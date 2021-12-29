const gql = require('graphql-tag')
const { ApolloServer } = require('apollo-server')


const typeDefs = gql`

type User {
    email: String!
    avatar: String!
    friends: [User]!
}

type Query {
    me: User!
}
`;

const resolvers = {
    Query: {
        me: () => {
            return {
                email: 'santosh@gmail.com',
                avatar: 'my-avatar.png',
                friends: []
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000).then(() => console.log('graphql server is listening on 4000'))

