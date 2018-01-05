import React, { Component } from 'react';
import { connect } from 'react-redux';
import LanguageSwitcher from '../components/localeSwitcher';
import fieldsActions from '../redux/fields/actions';
import schemasActions from '../redux/schemas/actions';
import { topbarStyle as styles } from '../styles';

const { setDefaultLocale, setAllLocale } = fieldsActions;
const { toggleSchemaView } = schemasActions;

class TopView extends Component {
  render() {
    const {
      defaultLocale,
      schemas,
      viewSchemas,
      setDefaultLocale,
      setAllLocale,
      toggleSchemaView
    } = this.props;

    return (
      <div style={styles.body}>
        <div style={styles.langDiv}>
          <div style={styles.langWrapper}>
            <LanguageSwitcher
              style={styles.languageSwitcher}
              value={defaultLocale}
              onSelect={setDefaultLocale}
            />
          </div>
          <div style={styles.buttonWrapper}>
            <button
              className="simpleButton"
              type="button"
              onClick={setAllLocale}
              style={styles.button}
            >
              Set all to default locale
            </button>
          </div>
        </div>
        <div style={styles.savedDiv}>
          {schemas.length === 0 ? (
            ''
          ) : (
            <button
              className="simpleButton"
              type="button"
              onClick={toggleSchemaView}
              style={styles.button}
            >
              {viewSchemas ? 'Hide Schemas' : 'Show Schemas'}
            </button>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { defaultLocale } = state.Fields.toJS();
  return { defaultLocale, ...state.Schemas.toJS() };
}
export default connect(mapStateToProps, {
  setDefaultLocale,
  setAllLocale,
  toggleSchemaView
})(TopView);
