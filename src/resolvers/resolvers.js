import {openModalResolver, closeModalResolver} from './modals-resolvers';
import {selectProductResolver} from "./selectProduct";

export const resolvers = {
  Mutation: {
    openModal: openModalResolver,
    closeModal: closeModalResolver,
    selectProduct: selectProductResolver
  }
};