import React from 'react';
import {compose, graphql, Query} from "react-apollo";
import modalsQuery from '../queries/modals.graphql';
import ModalsController from '../components/modals/ModalsController';
import closeModal from "../mutations/closeModal.graphql";

let updateModalCloseMutation = null;

const ModalsContainer = (props) => {

  updateModalCloseMutation = props.closeModal;

  return (
    <Query query={modalsQuery}>
      {({ data }) => {
        return <ModalsController modals={data.modals} closeModal={onCloseModal}/>
      }}
    </Query>
  );
};

const onCloseModal = (modalName) => {
  updateModalCloseMutation({
    variables: {
      name: modalName
    }
  });
};


const WrappedComponent = compose(
  graphql(closeModal, {name: 'closeModal'})
)
(ModalsContainer);

export default WrappedComponent;