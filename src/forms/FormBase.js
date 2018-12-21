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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import withStyles from "@material-ui/core/styles/withStyles";
import * as PropTypes from "prop-types";
import {stringCapitalize} from "../utils/extensionFunctions";
import CSSModules from "react-css-modules";
import moduleStyles from './formbase.module.css';

const styles = theme => ({
  formControl: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  fieldsWrapper: {
    margin: theme.spacing.unit
  }
});

const customWidgets = {
  "BaseInput": MaterialTextField,
  "select": MaterialSelect
};

const jsonSchema = graphQlToJsonSchema(schema);

class FormBase extends React.Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render() {
    const {classes} = this.props;

    const theme = {
      templates: {
        FieldTemplate: props => {
          const {rawDescription, rawErrors, children, hidden, schema, id, label} = props;
          console.log(props);

          let hasErrors = false;
          let error = null;

          const field = addExtraProps(children, {description: rawDescription});

          if (hidden || schema.type === "object") {
            return field;
          }

          if (typeof rawErrors !== typeof undefined && rawErrors !== null) {
            hasErrors = true;
            error = rawErrors[0];
          }

          const fieldLabel = stringCapitalize(label);

          const helperText = hasErrors ? (
            <FormHelperText id={`${id}_helper`}>{`${fieldLabel} ${error}`}</FormHelperText>
          ) : null;

          return (
            <FormControl className={classes.formControl}
                         error={hasErrors}
                         aria-describedby={`${id}_helper`} fullWidth>
              <InputLabel htmlFor={id}>{fieldLabel}</InputLabel>
              {field}
              {helperText}
            </FormControl>
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

    return <ApolloForm {...this.props} onSave={this.props.onSubmit}/>
  }
}

FormBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CSSModules(FormBase, moduleStyles));