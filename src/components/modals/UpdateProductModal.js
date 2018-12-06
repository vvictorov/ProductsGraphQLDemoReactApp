import React from 'react';
import Dialog from '@material-ui/core/es/Dialog/Dialog';
import DialogContent from '@material-ui/core/es/DialogContent/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import {configure} from 'react-apollo-form';
import createProductMutation from '../../mutations/createProduct.graphql';
import FormBase from "../../forms/FormBase";

class UpdateProductModal extends React.Component {

  constructor(props) {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  render() {

    return (
      <div>
          <Dialog
            open={this.props.isOpen}
            onClose={this.props.close}
            aria-labelledby="form-dialog-title"
            maxWidth={!this.props.fullScreen ? "xs" : false}
            fullScreen={this.props.fullScreen}
          >

            <DialogContent>
              <FormBase config={{
                mutation: {
                  name: 'createProduct',
                  document: createProductMutation
                }
              }}
                        data={{}}
                        title="Промени продукт"
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

export default withMobileDialog() (UpdateProductModal);