import React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import {stringCapitalize} from '../../utils/extensionFunctions';
import Input from "@material-ui/core/Input";

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

    const value = (typeof this.props.value !== typeof undefined && this.props.value !== null) ? this.props.value : null;

    return (
        <Input id={this.props.id} value={value} onChange={this.handleChange} name={this.props.name} />
    );
  }

  handleChange = (event) => {
    this.props.onChange(event.target.value);
  };
}

export default withStyles(styles)(MaterialTextField);