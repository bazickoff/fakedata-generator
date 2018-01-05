import { createFakeData } from '../../utility/faker';

const letterNumber = /^\w+$/;

const checkFields = fields => {
  let corruptedMessage = '';
  fields.forEach(field => {
    if (!field.fieldName) {
      corruptedMessage = 'All fields should have a name';
    }
    if (!field.fieldName.match(letterNumber)) {
      corruptedMessage = 'field name should have other letters or numbers';
    }
  });
  return corruptedMessage;
};

const actions = {
  NUM_DATA: 'NUM_DATA',
  TOGGLE_GENERATING_DATA: 'TOGGLE_GENERATING_DATA',
  TOGGLE_GENERAT_MODAL: 'TOGGLE_GENERAT_MODAL',
  SUCCESS_GENERATING_DATA: 'SUCCESS_GENERATING_DATA',
  toggleGeneratingData: () => ({ type: actions.TOGGLE_GENERATING_DATA }),
  toggleGeneratModal: () => ({ type: actions.TOGGLE_GENERAT_MODAL }),
  updateNumberData: numberData => ({ type: actions.NUM_DATA, numberData }),
  generateData: () => {
    return async (dispatch, getState) => {
      const { fields } = getState().Fields.toJS();
      const { numberData } = getState().GenerateData.toJS();
      const corruptedMessage = checkFields(fields);
      if (corruptedMessage) {
        alert(corruptedMessage);
        dispatch({ type: actions.TOGGLE_GENERATING_DATA });
      } else {
        const data = await createFakeData(fields, numberData);
        dispatch({ type: actions.SUCCESS_GENERATING_DATA, data });
      }
    };
  }
};
export default actions;
