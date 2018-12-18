import React from 'react';
import Dialog from '@material-ui/core/es/Dialog/Dialog';
import DialogContent from '@material-ui/core/es/DialogContent/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import UpdateProductForm from '../../forms/UpdateProductForm';

class UpdateProductModal extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  render() {

    if (this.props.product === null) {
      return null;
    }

    const product = this.props.product;

    return (
      <div>
        <Dialog
          open={this.props.isOpen}
          onClose={this.props.close}
          aria-labelledby="form-dialog-title"
          maxWidth={!this.props.fullScreen ? "xs" : false}
          fullScreen={this.props.fullScreen}
          disableEnforceFocus={true}
          disableBackdropClick={true}
        >

          <DialogContent>
            <UpdateProductForm product={product}
                               onSubmit={this.onSubmit}
                               onCancel={this.onCancel}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  onCancel() {
    this.props.close();
  }

  onSubmit() {
    this.props.close();
  }
}

export default withMobileDialog()(UpdateProductModal);