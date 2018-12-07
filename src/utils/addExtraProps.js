import React, {Component} from 'react';

const addExtraProps = (Component, extraProps) => {
  return <Component.type {...Component.props} {...extraProps} />;
};

export default addExtraProps;