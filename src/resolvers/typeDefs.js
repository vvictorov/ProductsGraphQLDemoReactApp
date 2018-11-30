const typeDefs = `
  type Modal {
    __typename: Modal,
    id: Int!,
    name: String!
}

  type Query {
      modals: [Modal]
  }
  
  type Mutation {
      openModal(name: String): Modal
      closeModal(name: String): Modal
  }
  
  directive @client(param: String) on FIELD
`;

export default typeDefs;