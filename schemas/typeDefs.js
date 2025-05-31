const { gql } = require("apollo-server");

const typeDefs = gql`
    """Representa a un lugar dentro del sistema"""
    type Lugar {
        id: ID!
        Titulo: String!
        Descripcion: String!
        UrlImg: String!
        categoria: String!
        address: String
        phone: String
        hours: String
    }

    """Consultas disponibles para obtener información de los lugares"""
    type Query {
        getLugares: [Lugar]
        getLugar(id: ID!): Lugar
    }

    """Operaciones de modificación sobre los lugares"""
    type Mutation { 
        createLugar(
            Titulo: String!
            Descripcion: String!
            UrlImg: String!
            categoria: String!
            address: String
            phone: String
            hours: String
        ): Lugar

        updateLugar(
            id: ID!
            Titulo: String!
            Descripcion: String!
            UrlImg: String!
            categoria: String!
            address: String
            phone: String
            hours: String
        ): Lugar

        deleteLugar(id: ID!): Boolean
    }
`;

module.exports = typeDefs;