const lugarModel = require("../models/lugarModel");

const resolvers = {
    Query: {
        getLugares: async () => await lugarModel.getAll(),
        getLugar: async (_, { id }) => await lugarModel.getById(id),
    },

    Mutation: {
        createLugar: async (_, { Titulo, Descripcion, UrlImg, categoria, address, phone, hours }) =>
            await lugarModel.create(Titulo, Descripcion, UrlImg, categoria, address, phone, hours),
        
        updateLugar: async (_, { id, Titulo, Descripcion, UrlImg, categoria, address, phone, hours }) =>
            await lugarModel.update(id, Titulo, Descripcion, UrlImg, categoria, address, phone, hours),
        
        deleteLugar: async (_, { id }) => await lugarModel.remove(id),
}
};

module.exports = resolvers;