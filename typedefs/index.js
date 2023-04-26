const {gql} = require("apollo-server")

const typedefs = gql`
type Token {
    address: String
    price: Float
    name: String
    ownedBy: String
    id: String
}

type User {
    name: String
    walletAddress: String
}

input addTokenInput {
    address: String
    price: Float
    name: String
    ownedBy: String
}

type successRes {
    message: String
    success: Boolean
}

type Mutation {
    addToken(input:addTokenInput): successRes
    deleteToken(tokenId: String): Token
}

type Query {
    getAllTokens: [Token]
    findOneToken(tokenId: String): Token
}
`
module.exports = typedefs