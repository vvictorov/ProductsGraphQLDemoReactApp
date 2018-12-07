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
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class MaterialTextField extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    const value = (typeof this.props.formData !== typeof undefined && this.props.formData !== null &&
      typeof this.props.formData[this.props.name] !== typeof undefined) ?
      this.props.formData[this.props.name] : "";

    this.state = {
      value: value
    }
  }

  render() {
    const {schema} = this.props;
    const {classes} = this.props;
    let options = null;

    if (schema.type === "string" && typeof schema.enum !== typeof undefined && schema.enum.length > 0) {
      options = schema.enum.map(value => {
        return(
          <MenuItem key={value} value={value}>
            {schema.enumNames[schema.enum.indexOf(value)]}
          </MenuItem>
        );
      });
    }

    const label = (typeof schema.description !== typeof undefined && schema.description !== null) ? schema.description : this.props.name;

    return (
      <TextField
        id={this.props.name}
        label={label}
        name={this.props.name}
        value={this.state.value}
        type={schema.type}
        className={classes.textField}
        onChange={this.handleChange}
        select={options !== null}
        margin="normal"
      >
        {options}
      </TextField>
    );
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
    this.props.onChange(event.target.value);
  };
}

export default withStyles(styles)(MaterialTextField);