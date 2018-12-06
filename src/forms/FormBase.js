import React from 'react';
import {configure} from "react-apollo-form";
import client from "../apollo";
import graphQlToJsonSchema from "../utils/graphQLToJsonSchema";
import schema from "../schemas/remote.graphql";
import MaterialTextField from "./fields/MaterialTextField";
import {Form} from '@material-ui/core';
import Button from '@material-ui/core/es/Button/Button';
import Typography from "@material-ui/core/Typography/Typography";

const customFields = {
  StringField: MaterialTextField
};

const theme = {
  templates: {
    FieldTemplate: props => {
      const { classNames, help, description, errors, children, rawErrors, label } = props;
      return (
        <div>
          {children}
          <span>{description}</span>
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
  fields: customFields,
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
  jsonSchema: graphQlToJsonSchema(schema),
  theme: theme
});

class FormBase extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return <ApolloForm {...this.props} />
  }

}

export default FormBase;