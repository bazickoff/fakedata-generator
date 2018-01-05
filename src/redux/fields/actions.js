const actions = {
  UPDATE_FIELD: 'UPDATE_FIELD',
  UPDATE_BULK_FIELDS: 'UPDATE_BULK_FIELDS',
  SET_DEFAULT_LOCALE: 'SET_DEFAULT_LOCALE',
  SET_ALL_LOCALE: 'SET_ALL_LOCALE',
  updateField: field => ({ type: actions.UPDATE_FIELD, field }),
  updateBulkField: fields => ({ type: actions.UPDATE_BULK_FIELDS, fields }),
  setDefaultLocale: locale => ({ type: actions.SET_DEFAULT_LOCALE, locale }),
  setAllLocale: () => ({ type: actions.SET_ALL_LOCALE })
};
export default actions;
