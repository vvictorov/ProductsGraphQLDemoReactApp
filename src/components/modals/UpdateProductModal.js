import React from 'react';
import Button from '@material-ui/core/es/Button/Button';
import Dialog from '@material-ui/core/es/Dialog/Dialog';
import DialogTitle from '@material-ui/core/es/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/es/DialogContent/DialogContent';
import TextField from '@material-ui/core/es/TextField/TextField';
import DialogActions from '@material-ui/core/es/DialogActions/DialogActions';
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import withMobileDialog from '@material-ui/core/withMobileDialog';
import {configure} from 'react-apollo-form';
import client from '../../apollo';
import schema from '../../schemas/remote.graphql';
import createProductMutation from '../../mutations/createProduct.graphql';
import graphQlToJsonSchema from '../../utils/graphQLToJsonSchema';

const DemoForm = configure({
  client,
  jsonSchema: graphQlToJsonSchema(schema)
});

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

            <DialogTitle id="form-dialog-title">Промени продукт</DialogTitle>
            <DialogContent>
              <DemoForm config={{
                mutation: {
                  name: 'createProduct',
                  document: createProductMutation
                }
              }}
                        data={{}}
                        ui={{}}
              />

              {/*<Field name="title" component={this.renderTitleField} />*/}
              {/*<Field name="categoryId" component={this.renderCategoryField} />*/}
              {/*<Field name="stock" component={this.renderStockField} />*/}
              {/*<Field name="unit" component={this.renderUnitField} />*/}
            </DialogContent>
            <DialogActions>
              <Button onClick={this.onCancel} color="primary">
                Отмяна
              </Button>
              <Button onClick={this.onSubmit} color="primary" variant="contained">
                Запази
              </Button>
            </DialogActions>
          </Dialog>
      </div>
    );
  }

  renderTitleField = (field) => {
    return <TextField
      margin="dense"
      id="title"
      label="Наименование"
      type="text"
      fullWidth
      {...field.input}
      value={field.input.value}
      autoFocus
    />;
  };

  renderCategoryField = (field) => {
    return <FormControl
      margin="dense"
      fullWidth>
      <InputLabel htmlFor="categoryId">Категория</InputLabel>
      <Select
        {...field.input}
        value={field.input.value}
        inputProps={{
          name: 'categoryId',
          id: 'categoryId',
        }}
      >
        <MenuItem value={1}>Плодове</MenuItem>
        <MenuItem value={2}>Зеленчуци</MenuItem>
      </Select>
    </FormControl>
  };

  renderStockField = (field) => {
    return <TextField
      margin="dense"
      id="stock"
      label="В наличност"
      type="number"
      fullWidth
      {...field.input}
      value={field.input.value}
    />
  };

  renderUnitField = (field) => {
    return <FormControl
      margin="dense"
      fullWidth>
      <InputLabel htmlFor="unit">Мярка</InputLabel>
      <Select
        {...field.input}
        value={field.input.value}
        inputProps={{
          name: 'unit',
          id: 'unit',
        }}
      >

        <MenuItem value={"кг"}>Килограма</MenuItem>
        <MenuItem value={"л"}>Литра</MenuItem>
        <MenuItem value={"бр"}>Броя</MenuItem>
        <MenuItem value={"гр"}>Грама</MenuItem>
        <MenuItem value={"мл"}>Милилитра</MenuItem>
      </Select>
    </FormControl>
  };

  onCancel() {
    // this.props.reset();
    this.props.close();
  }

  onSubmit() {
    // this.props.submit();
    this.props.close();
    // setTimeout(() => {
    //   this.props.reset();
    // }, 200);
  }
}

export default withMobileDialog() (UpdateProductModal);