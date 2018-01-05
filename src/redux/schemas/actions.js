const actions = {
  TOGGLE_SCHEMA_VIEW: 'TOGGLE_SCHEMA_VIEW',
  UPDATE_SCHEMA: 'UPDATE_SCHEMA',
  UPDATE_FILENAME: 'UPDATE_FILENAME',
  toggleSchemaView: () => ({ type: actions.TOGGLE_SCHEMA_VIEW }),
  updateFileName: fileName => ({ type: actions.UPDATE_FILENAME, fileName }),
  updateSchema: (fileName, fields) => ({
    type: actions.UPDATE_SCHEMA,
    fileName,
    fields
  })
};
export default actions;
