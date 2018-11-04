import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './inputText.css';

export class InputText extends Component {
  render() {
    return (
      <div className="input-row">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          type='text'
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
