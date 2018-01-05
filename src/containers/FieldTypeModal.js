import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import modalActions from '../redux/modal/actions';
import fieldsActions from '../redux/fields/actions';
import InputSearch from '../components/inputSearch';
import { fakerHeaders } from '../utility/faker';
import Select, { Option } from '../components/select';
import SingleFieldType from '../components/singleFieldType';
import { getDefaultOptions } from '../utility/faker';
import { fieldTypeModalStyle as styles } from '../styles';

const { toggleModal, setSearchText, setSelectedHeader } = modalActions;
const { updateField } = fieldsActions;
Modal.setAppElement('#root');

class FieldTypeModal extends Component {
  render() {
    const {
      visible,
      options,
      searchText,
      selectedHeader,
      selectedField,
      toggleModal,
      setSearchText,
      setSelectedHeader,
      updateField
    } = this.props;
    const selectedType = selectedField ? selectedField.type.value : '';
    return (
      <Modal
        isOpen={visible}
        onRequestClose={() => toggleModal()}
        contentLabel="Choose Type"
      >
        <h1 style={styles.header}>Choose Field Type</h1>
        <div style={styles.topbar}>
          <InputSearch
            style={styles.inputSearch}
            placeholder="Search..."
            value={searchText}
            onChange={setSearchText}
          />
          <Select
            style={styles.select}
            value={selectedHeader}
            onSelect={setSelectedHeader}
          >
            {fakerHeaders.map(header => (
              <Option value={header.value} key={header.value}>
                {header.title}
              </Option>
            ))}
          </Select>
          <button
            type="button"
            style={{ ...styles.inputSearch, flex: 1 }}
            className="simpleButton"
            onClick={() => toggleModal()}
          >
            Cancel
          </button>
        </div>
        <div style={styles.options}>
          {options.map((option, index) => (
            <SingleFieldType
              key={index}
              option={option}
              selectedType={selectedType}
              onClick={() => {
                let field = selectedField || {
                  id: -1,
                  fieldName: option.value.replace('.', '_'),
                  blank: '0'
                };
                field.type = option;
                if (option.fieldOption === 'true') {
                  field.options = getDefaultOptions(field);
                }
                updateField(field);
                toggleModal();
              }}
            />
          ))}
        </div>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return state.Modal.toJS();
}
export default connect(mapStateToProps, {
  toggleModal,
  setSearchText,
  setSelectedHeader,
  updateField
})(FieldTypeModal);
