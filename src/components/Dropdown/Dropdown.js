import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './dropdown.scss';

export class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      options: this.props.options,
      isEnabled: false
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;

    this.setState(prevState => ({
      ...prevState,
      query: value
    }), function () {
      this.filterOptions();
    });
  }

  filterOptions = () => {
    if (!this.state.query) {
      this.setFilteredOptions(this.props.options);
    } else {
      const filteredOptions = this.state.options.filter((option) => (
        option.toLowerCase().includes(this.state.query.toLowerCase())
      ));

      this.setFilteredOptions(filteredOptions);
    }
  }

  setFilteredOptions = (options) => {
    this.setState(prevState => ({
      ...prevState,
      options
    }));
  }

  handleInputFocus = () => {
    this.setState(prevState => ({
      ...prevState,
      isEnabled: true
    }));
  }

  handleInputBlur = () => {
    setTimeout(() => {
      this.setState(prevState => ({
        ...prevState,
        isEnabled: false
      }));
    }, 1000);
  }

  get options() {
    const options = this.state.options.map((option, index) =>
      <li key={`${option}-${index}`} onClick={() => console.log(`d ${option}`)}>{option}</li>
    );

    return options;
  }

  render() {
    return (
      <div className='dropdown'>
        <input
          className='dropdown-search'
          type='text'
          placeholder={`Select ${this.props.label}`}
          value={this.state.query}
          onChange={this.handleInputChange}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
        />
        {this.state.isEnabled &&
          <ul className='dropdown-options'>
            {this.options}
          </ul>
        }
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  onSelectCategory: PropTypes.func.isRequired
};
