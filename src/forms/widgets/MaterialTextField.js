import React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import {stringCapitalize} from '../../utils/extensionFunctions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 19,
  },
});

class MaterialTextField extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const {schema} = this.props;
    const {classes} = this.props;

    const value = (typeof this.props.value !== typeof undefined && this.props.value !== null) ? this.props.value : "";

    return (
      <TextField
        id={this.props.name}
        label={stringCapitalize(this.props.label)}
        name={this.props.name}
        type={schema.type}
        className={classes.textField}
        onChange={this.handleChange}
        margin="normal"
        value={value}
      />
    );
  }

  handleChange = (event) => {
    this.props.onChange(event.target.value);
  };
}

export default withStyles(styles)(MaterialTextField);