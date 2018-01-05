import React, { Component } from 'react';

export default class extends Component {
  state = { value: '' };
  onChange = event => {
    event.preventDefault();
    const value = event.target.value;
    if (this.props.numeric) {
      if (value && !isNaN(value)) {
        if (this.props.onChange) {
          this.props.onChange(value);
        }
      }
    } else {
      this.props.onChange(value);
    }
    this.setState({ value: '' });
  };
  render() {
    const { style, value, placeholder } = this.props;
    return (
      <input
        type="text"
        className="simpleInput"
        style={style}
        onChange={this.onChange}
        value={value || this.state.value}
        placeholder={placeholder || ''}
      />
    );
  }
}
