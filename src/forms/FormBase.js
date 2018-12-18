import React from 'react';
import {configure} from "react-apollo-form";
import client from "../apollo";
import graphQlToJsonSchema from "../utils/graphQLToJsonSchema";
import schema from "../schemas/remote.graphql";
import MaterialTextField from "./widgets/MaterialTextField";
import Button from '@material-ui/core/es/Button/Button';
import Typography from "@material-ui/core/Typography/Typography";
import addExtraProps from '../utils/addExtraProps';
import MaterialSelect from './widgets/MaterialSelect';

const customWidgets = {
  "BaseInput": MaterialTextField,
  "select": MaterialSelect
};

const jsonSchema = graphQlToJsonSchema(schema);

class FormBase extends React.Component{

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render() {
    const theme = {
      templates: {
        FieldTemplate: props => {
          const { rawDescription, children } = props;

          const field = addExtraProps(children, {description: rawDescription});

          return (
            <div>
              {field}
            </div>
          );
        },
        ObjectFieldTemplate: props => {
          return (
            <div>
              {props.properties.map(p => p.content)}
            </div>
          );
        }
      },
      widgets: customWidgets,
      renderers: {
        saveButton: p => {
          return (
            <Button onClick={p.save} color="primary" variant="contained">
              Запази
            </Button>
          );
        },
        cancelButton: p => {
          return (
            <Button onClick={p.cancel} color="primary">
              Отмяна
            </Button>
          );
        },
        header: p => (
          <Typography variant="h6" color="inherit">
            {p.title}
          </Typography>
        )
      }
    };

    const ApolloForm = configure({
      client,
      jsonSchema: jsonSchema,
      theme: theme
    });

    return <ApolloForm {...this.props} onSave={this.props.onSubmit} />
  }
}

export default FormBase;