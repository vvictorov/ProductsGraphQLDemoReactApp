import modalQuery from '../queries/modals.graphql';

export const resolvers = {
  Mutation: {
    openModal: (_, { name }, { cache }) => {

      try{
        const result = cache.readQuery({query: modalQuery});


        const modalNames = result.modals;

        cache.writeData({
          data: {
            modals: [...modalNames, name]
          }
        });
      }catch (e) {

      }

      return null;
    }
  }
};