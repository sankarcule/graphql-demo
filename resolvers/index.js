

module.exports = {
 Query:{
    getAllTokens: async (_, args) =>{
        // const tokens = await mongoose.tokens.findAll()

        const tokens = [{
            address: "String",
            price: "Float",
            name: "String",
            ownedBy: "User",
            id: "String",
        }]
        return tokens
    }
 },
 Mutation:{
    addToken: async (_, args) =>{
        // mongoose.tokens.create()
        return {
            success: true,
            message: "Token is added"
        }
    }
 }
}