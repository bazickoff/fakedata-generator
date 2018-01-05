import React from 'react';
import Select, { Option } from './select';
import { Localization } from '../utility/faker';

export default ({ style, ...props }) => (
  <Select {...props} style={{ ...style, height: '100%' }}>
    {Localization.map(locale => (
      <Option value={locale} key={locale}>
        {locale}
      </Option>
    ))}
  </Select>
);
