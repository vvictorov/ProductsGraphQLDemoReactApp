import React from 'react';
import {Query} from "react-apollo";
import modalsQuery from '../queries/modals.graphql';
import ModalsController from '../components/modals/ModalsController';

const ModalsContainer = () => {
  return (
    <Query query={modalsQuery}>
      {({ data }) => {
        return <ModalsController modals={data.modals} closeModal={closeModal}/>
      }}
    </Query>
  );
};

const closeModal = (modalName) => {
  console.log(modalName);
};

export default ModalsContainer;