import modalQuery from "../queries/modals.graphql";

export const openModalResolver = (_, {name}, {cache}) => {

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
};

export const closeModalResolver = (_, {name}, {cache}) => {

  const {modals: currentModals} = cache.readQuery({query: modalQuery});

  let modals = currentModals;

  const index = currentModals.findIndex(modal => modal.name === name);

  if (index >= 0) {

    modals = [
      ...currentModals.slice(0, index),
      ...currentModals.slice(index + 1)
    ];
  }

  const data = {
    modals: modals
  };

  cache.writeQuery({
    query: modalQuery,
    data
  });

  return name;
};

function * generateId () {
  let num = 1;
  while (true) {
    yield num;
    num = num + 1
  }

}

const idGenerator = generateId();