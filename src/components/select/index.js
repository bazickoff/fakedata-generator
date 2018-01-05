import React from 'react';
import SelectItem, { Option } from 'rc-select';
import './select.css';

const Select = ({ style, ...props }) => (
  <div style={{ ...style, overflow: 'auto' }}>
    <SelectItem {...props} style={{ width: '100%', height: '100%' }} />
  </div>
);

const SelectOptions = ({ options, ...props }) => (
  <Select {...props}>
    {options.map(option => (
      <Option value={option.value} key={option.value}>
        {option.label}
      </Option>
    ))}
  </Select>
);

const SelectBoolean = props => (
  <Select {...props}>
    <Option value={'true'}>true</Option>
    <Option value={'false'}>false</Option>
  </Select>
);

export default Select;
export { Option, SelectOptions, SelectBoolean };
