const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./controllers/lugarController");

const server = new ApolloServer({typeDefs,resolvers});

server.listen().then(({url}) =>{
    console.log('servidor corriendo en ' + url)
});
