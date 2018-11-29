const typeDefs = `
  type Modal {
    __typename: Modal
    name: String!
  }
  
  type Query {
      modals: [Modal]
  }
`;

export default typeDefs;