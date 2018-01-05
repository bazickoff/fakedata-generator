import React, { Component } from 'react';
import { connect } from 'react-redux';
import fieldsActions from '../redux/fields/actions';
import schemasActions from '../redux/schemas/actions';
import { timeDifference } from '../utility';
import { scheemaListStyle as styles } from '../styles';

const { updateBulkField } = fieldsActions;
const { toggleSchemaView, updateSchema, updateFileName } = schemasActions;

class SchemaList extends Component {
  render() {
    const {
      schemas,
      fileName,
      viewSchemas,
      updateSchema,
      updateBulkField,
      toggleSchemaView,
      updateFileName
    } = this.props;
    const sortedSchemas = schemas.sort((a, b) => b.updatedAt - a.updatedAt);
    const schemaComponent = (schema, index) => (
      <div
        key={index}
        style={
          fileName === schema.fileName ? (
            styles.selectedSchemaComponent
          ) : (
            styles.schemaComponent
          )
        }
        onClick={event => {
          event.stopPropagation();
          updateBulkField(schema.fields);
          updateFileName(schema.fileName);
          toggleSchemaView();
        }}
      >
        <div style={styles.schemaInfo}>
          <p style={styles.schemaFileName}>{schema.fileName}</p>
          <p style={styles.updatedTime}>{timeDifference(schema.updatedAt)}</p>
        </div>
        <div
          style={styles.deleteSchema}
          onClick={() => updateSchema(schema.fileName)}
        >
          <i className="material-icons">remove_circle</i>
        </div>
      </div>
    );
    const bodyStyles = viewSchemas ? styles.body : styles.bodyHidden;
    return (
      <div style={bodyStyles}>
        <span style={styles.header}>All Schemas</span>
        <div
          style={{ ...styles.deleteSchema, color: 'white' }}
          onClick={toggleSchemaView}
        >
          <i className="material-icons">close</i>
        </div>
        {sortedSchemas.map(schemaComponent)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.Schemas.toJS();
}
export default connect(mapStateToProps, {
  updateBulkField,
  toggleSchemaView,
  updateSchema,
  updateFileName
})(SchemaList);
