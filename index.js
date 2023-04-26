const {ApolloServer} = require("apollo-server")
const typedefs = require("./typedefs")
const resolvers = require("./resolvers")

const server = new ApolloServer({
    typeDefs: typedefs,
    resolvers
})

server.listen(8000).then(({url})=>{
    console.log(`server is running on ${url}`);
})