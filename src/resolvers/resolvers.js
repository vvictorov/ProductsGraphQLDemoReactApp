import modalQuery from '../queries/modals.graphql';

export const resolvers = {
  Mutation: {
    openModal: (_, { name }, { cache }) => {

        const {modals: currentModals} = cache.readQuery({query: modalQuery});

        const data = {
          modals: [...currentModals, {
            __typename: "Modal",
            id: idGenerator.next().value,
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

function * generateId () {
  let num = 1;
  while (true) {
    yield num;
    num = num + 1
  }

}

const idGenerator = generateId();