import { Map } from 'immutable';
import clone from 'clone';
import actions from './actions';
import { lsGet, lsSave } from '../../utility';
import { preFields } from '../../utility/faker';

const initState = new Map({
  fields: lsGet('fakerDataDefault') || preFields,
  defaultLocale: 'en_US'
});

const updateFields = (fields, updatedField, locale) => {
  let newFields = [];
  if (updatedField.id === -1) {
    updatedField.id = new Date().getTime();
    updatedField.locale = locale;
    fields.push(updatedField);
    newFields = fields;
  } else {
    fields.forEach(field => {
      if (field.id === updatedField.id) {
        if (!field.deleted) {
          newFields.push(updatedField);
        }
      } else {
        newFields.push(field);
      }
    });
  }
  lsSave('fakerDataDefault', newFields);
  return newFields;
};
export default function todoReducer(state = initState, action) {
  let fields = clone(state.get('fields'));
  switch (action.type) {
    case actions.SET_DEFAULT_LOCALE: {
      return state.set('defaultLocale', action.locale);
    }
    case actions.SET_ALL_LOCALE: {
      const defaultLocale = state.get('defaultLocale');
      fields.forEach((field, index) => (fields[index].locale = defaultLocale));
      return state.set('fields', fields);
    }
    case actions.UPDATE_FIELD: {
      return state.set(
        'fields',
        updateFields(fields, action.field, state.get('defaultLocale'))
      );
    }
    case actions.UPDATE_BULK_FIELDS:
      lsSave('fakerDataDefault', action.fields);
      return state.set('fields', clone(action.fields));
    default:
      return state;
  }
}
