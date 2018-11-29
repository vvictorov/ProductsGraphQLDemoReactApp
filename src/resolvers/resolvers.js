import modalQuery from '../queries/modals.graphql';

export const resolvers = {
  Mutation: {
    openModal: (_, { name }, { cache }) => {

        const result = cache.readQuery({query: modalQuery});


        const modalNames = result.modals;

        console.log(modalNames);

        return null;

        cache.writeData({
            modals: [...modalNames, name]
        });

      return null;
    }
  }
};