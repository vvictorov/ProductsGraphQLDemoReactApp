const typeDefs = `
  type Modal {
      __typename: Modal
      name: String!
  }
  
  type Query {
      modals: [Modal]
  }
  
  type Mutation {
      openModal(name: !String)
      closeModal(name: !String)
  }
`;

export default typeDefs;