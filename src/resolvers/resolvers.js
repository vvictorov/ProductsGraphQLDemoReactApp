import modalQuery from '../queries/modals.graphql';

export const resolvers = {
  Mutation: {
    openModal: (_, { name }, { cache }) => {

        const {modals: currentModals} = cache.readQuery({query: modalQuery});

        const data = {
          modals: [...currentModals, {
            __typename: "Modal",
            name: name
          }]
        };

        cache.writeQuery({
          query: modalQuery,
          data
        });

      return name;
    }
  }
};