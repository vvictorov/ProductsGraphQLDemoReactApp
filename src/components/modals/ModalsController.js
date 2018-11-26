import React from 'react';
import {Constants} from '../../utils/constants';
import UpdateProductModal from './UpdateProductModal';

export default class ModalsController extends React.Component {
  constructor(props) {
    super();

    this.onModalClose = this.onModalClose.bind(this);
  }

  render() {

    return (
        <div>
            <UpdateProductModal isOpen={this.props.modals.some(x => x.name === Constants.ModalDialogs.UpdateProduct)}
                                close={() => this.onModalClose(Constants.ModalDialogs.UpdateProduct)}/>
        </div>
    );
  }

  onModalClose(modalName) {
    this.props.closeModal(modalName);
  }
}