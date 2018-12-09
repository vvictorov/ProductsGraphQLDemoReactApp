import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onChange(event.target.value);
  };

  render() {
    const { classes } = this.props;
    const values = this.props.schema.enum;
    const names = this.props.schema.enumNames;

    const options = values.map((value) => {
      return (
        <MenuItem value={value} key={value}>
          {names[values.indexOf(value)]}
        </MenuItem>
      );
    });

    const value = (typeof this.props.value !== typeof undefined && this.props.value !== null) ? this.props.value : "";

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}
                     fullWidth
                     margin="normal">
          <InputLabel htmlFor={this.props.label}>{this.props.label.capitalize()}</InputLabel>
          <Select
            value={value}
            onChange={this.handleChange}
            id={this.props.label}
            name={this.props.label}
          >
            {options}
          </Select>
        </FormControl>
      </div>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
