import { Map } from 'immutable';
import clone from 'clone';
import actions from './actions';

const formats = [
  'JSON',
  'XML',
  'CSV',
  'table',
  'firebase',
  'sqlInsert',
  'tabDelimited'
];

const initState = new Map({
  visibleGenerateModal: false,
  isGeneratingData: false,
  numberData: '10'
});

export default function todoReducer(state = initState, action) {
  switch (action.type) {
    case actions.NUM_DATA:
      return state.set('numberData', action.numberData);
    case actions.TOGGLE_GENERATING_DATA:
      return state.set('isGeneratingData', !state.get('isGeneratingData'));
    case actions.TOGGLE_GENERAT_MODAL:
      return state.set(
        'visibleGenerateModal',
        !state.get('visibleGenerateModal')
      );
    case actions.SUCCESS_GENERATING_DATA:
      return state
        .set('visibleGenerateModal', true)
        .set('isGeneratingData', false)
        .set('data', clone(action.data));
    default:
      return state;
  }
}
export { formats };
