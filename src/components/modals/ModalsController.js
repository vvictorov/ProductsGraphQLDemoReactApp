import React from 'react';
import {Constants} from '../../utils/constants';
import UpdateProductModal from './UpdateProductModal';

export default class ModalsController extends React.Component {
  constructor(props) {
    super(props);

    this.onUpdateProductModalClose = this.onUpdateProductModalClose.bind(this);
  }

  render() {

    return (
        <div>
            <UpdateProductModal isOpen={this.props.modals.some(x => x.name === Constants.ModalDialogs.UpdateProduct)}
                                close={this.onUpdateProductModalClose}
                                product={this.props.selectedProduct}
            />
        </div>
    );
  }

  onUpdateProductModalClose() {
    this.props.closeModal(Constants.ModalDialogs.UpdateProduct);
  }
}