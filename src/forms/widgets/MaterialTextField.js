import React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

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

    const value = (typeof this.props.formData !== typeof undefined && this.props.formData !== null &&
      typeof this.props.formData[this.props.name] !== typeof undefined) ?
      this.props.formData[this.props.name] : "";

  }

  render() {
    const {schema} = this.props;
    const {classes} = this.props;

    return (
      <TextField
        id={this.props.name}
        label={this.props.label.capitalize()}
        name={this.props.name}
        type={schema.type}
        className={classes.textField}
        onChange={this.handleChange}
        margin="normal"
      />
    );
  }

  handleChange = (event) => {
    this.props.onChange(event.target.value);
  };
}

export default withStyles(styles)(MaterialTextField);