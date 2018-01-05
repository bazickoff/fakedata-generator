import React, { Component } from 'react';
import { connect } from 'react-redux';
import modalActions from '../redux/modal/actions';
import fieldsActions from '../redux/fields/actions';
import InputSearch from '../components/inputSearch';
import Loader from '../components/loader';
import FieldOptions from '../components/fieldOptions';
import LanguageSwitcher from '../components/localeSwitcher';
import { fieldsStyle as styles } from '../styles';

const { toggleModal } = modalActions;
const { updateField } = fieldsActions;

const Header = () => (
  <div style={styles.headerBody}>
    <span style={{ ...styles.header, flex: 2 }}>#</span>
    <span style={{ ...styles.header, flex: 30 }}>Field Name</span>
    <div style={{ ...styles.header, flex: 30 }}>Type</div>
    <span style={{ ...styles.header, flex: 25 }}>Locale</span>
    <span style={{ ...styles.header, flex: 15, fontSize: 10 }}>blank (%)</span>
    <div style={{ ...styles.header, flex: 101 }} />
  </div>
);
class ModalInfo extends Component {
  componentWillReceiveProps(nextProps) {
    const newFields = nextProps.fields;
    const oldFields = this.props.fields;
    if (newFields.length > oldFields.length) {
      this.isScrollToBottom = true;
    }
  }
  componentDidUpdate() {
    if (this.isScrollToBottom) {
      this.scrollToBottom();
    }
    this.isScrollToBottom = false;
  }
  scrollToBottom = () => {
    const fieldsDiv = document.getElementById('fieldsDiv');
    fieldsDiv.scrollTop = fieldsDiv.scrollHeight;
  };
  render() {
    const { fields, isGeneratingData, toggleModal, updateField } = this.props;
    const disableDelete = fields.length === 1;
    const fieldOptionsProps = { updateField };
    const singleField = (field, index) => (
      <div key={index} style={styles.singleField}>
        <span style={{ ...styles.field, flex: 2 }}>{index + 1}</span>
        <InputSearch
          style={{ ...styles.field, flex: 30 }}
          placeholder="Field Name"
          value={field.fieldName}
          onChange={value => {
            field.fieldName = value;
            updateField(field);
          }}
        />
        <div style={styles.singleFieldTitle} onClick={() => toggleModal(field)}>
          {field.type.title}
        </div>
        <LanguageSwitcher
          style={styles.ls}
          value={field.locale}
          onSelect={locale => {
            field.locale = locale;
            updateField(field);
          }}
        />
        <InputSearch
          style={{ ...styles.field, flex: 15 }}
          placeholder="% blank"
          numeric
          value={field.blank}
          onChange={blank => {
            field.blank = blank;
            updateField(field);
          }}
        />
        <FieldOptions
          {...fieldOptionsProps}
          field={field}
          fieldOptions={field.options}
        />
        <div
          style={styles.deleteField}
          onClick={() =>
            disableDelete ? null : updateField({ ...field, deleted: true })}
        >
          {disableDelete ? '' : <i className="material-icons">remove_circle</i>}
        </div>
      </div>
    );
    return (
      <div style={styles.body}>
        <Header />
        <div id="fieldsDiv" style={styles.fieldsContainer}>
          {isGeneratingData ? <Loader /> : fields.map(singleField)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isGeneratingData } = state.GenerateData.toJS();
  return { ...state.Fields.toJS(), isGeneratingData };
}
export default connect(mapStateToProps, {
  toggleModal,
  updateField
})(ModalInfo);
