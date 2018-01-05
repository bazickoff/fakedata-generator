import React, { Component } from 'react';
import { getFieldOptions } from '../utility/faker';
import { SelectOptions, SelectBoolean } from './select';
import InputSearch from './inputSearch';
import { fieldsOptionStyle as styles } from '../styles';
const OptionHeader = ({ children }) => (
  <span style={styles.optionHeader}>{children}</span>
);

export default class extends Component {
  render() {
    const { field, fieldOptions, updateField } = this.props;
    const options = getFieldOptions(field.type);
    let empltyDivFlex;
    switch (options.length) {
      case 0:
        empltyDivFlex = 1;
        break;
      case 1:
        empltyDivFlex = 2;
        break;
      case 2:
        empltyDivFlex = 1;
        break;
      default:
        empltyDivFlex = 0;
    }
    const singleOption = option => {
      const { type, value } = option;
      const singleOptionParentProps = {
        key: value,
        style: styles.singleOption
      };
      const singleOptionProps = {
        value: fieldOptions[value],
        placeholder: value
      };
      const updateOptions = newVal => {
        field.options[value] = newVal;
        updateField(field);
      };
      switch (type) {
        case 'select':
          return (
            <div {...singleOptionParentProps}>
              <OptionHeader>{value}</OptionHeader>
              <SelectOptions
                style={{
                  ...styles.singleOptionBody,
                  paddingTop: '1vh',
                  width: '100%',
                  flex: 2
                }}
                {...singleOptionProps}
                onSelect={updateOptions}
                options={option.options}
              />
            </div>
          );
        case 'boolean':
          return (
            <div {...singleOptionParentProps}>
              <OptionHeader>{value}</OptionHeader>
              <SelectBoolean
                {...singleOptionProps}
                style={{
                  paddingTop: '1vh',
                  ...styles.singleOption,
                  ...styles.singleOptionBody
                }}
                onSelect={updateOptions}
              />
            </div>
          );
        case 'input':
          return (
            <div {...singleOptionParentProps}>
              <OptionHeader>{value}</OptionHeader>
              <InputSearch
                {...singleOptionProps}
                onChange={updateOptions}
                style={styles.singleOptionBody}
              />
            </div>
          );
        case 'numeric':
          return (
            <div {...singleOptionParentProps}>
              <OptionHeader>{value}</OptionHeader>
              <InputSearch
                {...singleOptionProps}
                numeric
                onChange={updateOptions}
                style={styles.singleOptionBody}
              />
            </div>
          );
        default:
          return <div key={value} />;
      }
    };
    return (
      <div style={styles.body}>
        {options.map(singleOption)}
        <div style={{ flex: empltyDivFlex }} />
      </div>
    );
  }
}
