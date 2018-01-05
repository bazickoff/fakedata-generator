import React, { Component } from 'react';
import { connect } from 'react-redux';
import saveAs from 'react-file-download';
import Modal from 'react-modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import InputSearch from '../components/inputSearch';
import Select, { Option } from '../components/select';
import ReactTable from '../components/reactTable';
import MarkedComponent from '../components/markedComponent';
import { formats } from '../redux/generateData/reducer';
import generateDataActions from '../redux/generateData/actions';
import schemasActions from '../redux/schemas/actions';
import { lsGet, lsSave, camelCaseToHuman } from '../utility';
import objectConversions from '../utility/objectConversions';
import { dataModalStyle as styles } from '../styles';

const { toggleGeneratModal } = generateDataActions;
const { updateSchema, updateFileName } = schemasActions;
Modal.setAppElement('#root');

class FieldTypeModal extends Component {
  state = {
    format: lsGet('fakerFormatDefault') || 'json'
  };
  toggleModal = () => {
    this.props.toggleGeneratModal();
  };
  saveFileAs = formattedData => {
    const { fileName } = this.props;
    const { format } = this.state;
    if (!fileName) {
      alert('Please set file name');
      return;
    }
    const blob = new Blob([formattedData], {
      type: 'text/plain;charset=utf-8'
    });
    const ext = format === 'firebase' ? 'json' : format;
    saveAs(blob, `${fileName}.${ext}`);
  };
  saveSchema = () => {
    const { fields, updateSchema, fileName } = this.props;
    if (!fileName) {
      alert('Please set file name');
      return;
    }
    alert(`Schema saved as ${fileName}`);
    updateSchema(fileName, fields);
  };
  render() {
    const {
      data,
      fields,
      visibleGenerateModal,
      fileName,
      updateFileName
    } = this.props;
    const { format } = this.state;
    const fieldsKey = fields.map(field => field.fieldName);
    const formattedData = objectConversions(data, format, fieldsKey);
    return (
      <Modal
        isOpen={visibleGenerateModal}
        onRequestClose={this.toggleModal}
        contentLabel="Choose Type"
      >
        <div style={styles.modalBody}>
          <h1 style={styles.modalHeader}>Generated Fake Data Output</h1>
          <div style={styles.topbar}>
            <InputSearch
              style={styles.inputSearch}
              placeholder="FileName..."
              value={fileName}
              onChange={fileName => updateFileName(fileName)}
            />
            <Select
              style={styles.selectFormat}
              value={format}
              onSelect={format => {
                this.setState({ format });
                lsSave('fakerFormatDefault', format);
              }}
            >
              {formats.map(format => (
                <Option value={format} key={format}>
                  {camelCaseToHuman(format)}
                </Option>
              ))}
            </Select>
          </div>
          <div style={styles.codeBlock}>
            {format === 'table' ? (
              <ReactTable data={data} columns={fieldsKey} />
            ) : (
              <MarkedComponent output={formattedData} />
            )}
          </div>
          <div style={styles.footer}>
            <div style={styles.buttonWrapper}>
              <button
                type="button"
                className="simpleButton"
                onClick={this.toggleModal}
                style={styles.button}
              >
                Cancel
              </button>
            </div>
            <div style={styles.buttonWrapper}>
              <CopyToClipboard
                text={formattedData}
                onCopy={() => alert('copied')}
              >
                <button
                  type="button"
                  className="simpleButton"
                  style={styles.button}
                >
                  Copy
                </button>
              </CopyToClipboard>
            </div>
            <div style={styles.buttonWrapper}>
              <button
                type="button"
                className="simpleButton"
                onClick={() => this.saveFileAs(formattedData)}
                style={styles.button}
              >
                Save Output
              </button>
            </div>
            <div style={styles.buttonWrapper}>
              <button
                type="button"
                className="simpleButton"
                onClick={this.saveSchema}
                style={styles.button}
              >
                Save Schema
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.Fields.toJS(),
    ...state.GenerateData.toJS(),
    ...state.Schemas.toJS()
  };
}
export default connect(mapStateToProps, {
  toggleGeneratModal,
  updateSchema,
  updateFileName
})(FieldTypeModal);
