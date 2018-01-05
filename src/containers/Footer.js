import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputSearch from '../components/inputSearch';
import modalActions from '../redux/modal/actions';
import generateDataActions from '../redux/generateData/actions';
import { footerStyle as styles } from '../styles';

const { toggleModal } = modalActions;
const {
  updateNumberData,
  generateData,
  toggleGeneratingData
} = generateDataActions;

class Footer extends Component {
  render() {
    const {
      numberData,
      toggleModal,
      updateNumberData,
      generateData,
      toggleGeneratingData
    } = this.props;

    return (
      <div style={styles.body}>
        <div style={{ flex: '1', ...styles.divWrapper }}>
          <button
            type="button"
            className="simpleButton"
            onClick={() => toggleModal()}
            style={styles.button}
          >
            Add Field
          </button>
        </div>
        <div style={{ flex: '1', ...styles.divWrapper }}>
          <InputSearch
            style={styles.button}
            value={numberData}
            onChange={value => {
              updateNumberData(value);
            }}
            numeric
          />
        </div>
        <div style={styles.buttonWrapper}>
          <button
            type="button"
            className="simpleButton"
            onClick={() => {
              toggleGeneratingData();
              generateData();
            }}
            style={styles.button}
          >
            Generate Data
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { numberData } = state.GenerateData.toJS();
  return { numberData };
}
export default connect(mapStateToProps, {
  toggleModal,
  updateNumberData,
  generateData,
  toggleGeneratingData
})(Footer);
