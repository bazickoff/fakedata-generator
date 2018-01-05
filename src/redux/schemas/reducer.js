import { Map } from 'immutable';
import clone from 'clone';
import actions from './actions';
import { lsGet, lsSave } from '../../utility';

const initState = new Map({
  viewSchemas: false,
  fileName: `file-${new Date().getTime() % 9999}`,
  schemas: lsGet('fakerDataSchemasDefault') || []
});

const updateSchemas = (schemas, fileName, fields) => {
  let newSchemas = [];
  let newData = true;
  schemas.forEach(schema => {
    if (schema.fileName === fileName) {
      newData = false;
      schema.fields = fields;
      schema.updatedAt = new Date().getTime();
      if (fields) {
        newSchemas.push(schema);
      }
    } else {
      newSchemas.push(schema);
    }
  });
  if (newData) {
    newSchemas.push({ fields, fileName, updatedAt: new Date().getTime() });
  }
  lsSave('fakerDataSchemasDefault', newSchemas);
  return newSchemas;
};
export default function todoReducer(state = initState, action) {
  let schemas = clone(state.get('schemas'));
  switch (action.type) {
    case actions.TOGGLE_SCHEMA_VIEW: {
      return state.set('viewSchemas', !state.get('viewSchemas'));
    }
    case actions.UPDATE_SCHEMA: {
      const newSchemas = updateSchemas(schemas, action.fileName, action.fields);
      const viewSchemas =
        newSchemas.length === 0 ? false : state.get('viewSchemas');
      return state.set('schemas', newSchemas).set('viewSchemas', viewSchemas);
    }
    case actions.UPDATE_FILENAME:
      return state.set('fileName', action.fileName);
    default:
      return state;
  }
}
