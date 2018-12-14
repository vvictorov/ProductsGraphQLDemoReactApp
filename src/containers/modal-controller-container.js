import React from 'react';
import {compose, graphql, Query} from "react-apollo";
import modalsQuery from '../queries/modals.graphql';
import selectedProductQuery from '../queries/selectedProduct.graphql';
import ModalsController from '../components/modals/ModalsController';
import closeModal from "../mutations/closeModal.graphql";

let updateModalCloseMutation = null;

const ModalsContainer = (props) => {

  updateModalCloseMutation = props.closeModal;

  return (
    <Query query={modalsQuery}>
      {({ data: {modals} }) => (
        <Query query={selectedProductQuery}>
          {({ data: {selectedProduct} }) => {
            return <ModalsController modals={modals} closeModal={onCloseModal} selectedProduct={selectedProduct}/>
          }}
        </Query>
      )}
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
)(ModalsContainer);

export default WrappedComponent;