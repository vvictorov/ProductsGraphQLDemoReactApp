import {openModalResolver, closeModalResolver} from './modals-resolvers';

export const resolvers = {
  Mutation: {
    openModal: openModalResolver,
    closeModal: closeModalResolver
  }
};