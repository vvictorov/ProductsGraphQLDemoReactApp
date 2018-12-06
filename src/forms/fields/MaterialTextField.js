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

    const value = (typeof this.props.formData !== typeof undefined && this.props.formData !== null &&
                   typeof this.props.formData[this.props.name] !== typeof undefined) ?
      this.props.formData[this.props.name] : "";

    return (
      <TextField
        id={this.props.name}
        label={this.props.name}
        name={this.props.name}
        value={value}
        type={schema.type}
        className={classes.textField}
        onChange={this.handleSelectChange(this.props.name)}
        select={options !== null}
        margin="normal"
      >
        <MenuItem key="test" value="test">
          test
        </MenuItem>
      </TextField>
    );
  }

  handleChange = (event) => {
    this.props.onChange(event.currentTarget.value);
  };

  handleSelectChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    this.handleChange(event);
  };
}

export default withStyles(styles)(MaterialTextField);