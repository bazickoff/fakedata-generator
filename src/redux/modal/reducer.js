import { Map } from 'immutable';
import clone from 'clone';
import actions from './actions';
import { fakerOptions } from '../../utility/faker';

const initState = new Map({
  visible: false,
  searchText: '',
  selectedHeader: 'all',
  selectedField: undefined,
  options: clone(fakerOptions)
});
const filterOptions = (searchText, selectedHeader) => {
  if (searchText === '' && selectedHeader === 'all') {
    return fakerOptions;
  }
  const options = [];
  searchText = searchText.toLowerCase();
  fakerOptions.forEach(option => {
    if (selectedHeader === 'all' || selectedHeader === option.header) {
      if (searchText) {
        if (
          option.title.toLowerCase().indexOf(searchText) > -1 ||
          option.header.toLowerCase().indexOf(searchText) > -1
        ) {
          options.push(option);
        }
      } else {
        options.push(option);
      }
    }
  });
  return options;
};
export default function todoReducer(state = initState, action) {
  switch (action.type) {
    case actions.TOGGLE_MODAL: {
      return state
        .set('visible', !state.get('visible'))
        .set('options', clone(fakerOptions))
        .set('searchText', '')
        .set('selectedHeader', 'all')
        .set('selectedField', action.selectedField);
    }
    case actions.SET_SEARCH_TEXT:
      return state
        .set('searchText', action.searchText)
        .set(
          'options',
          filterOptions(action.searchText, state.get('selectedHeader'))
        );
    case actions.SET_SELECT_HEADER:
      return state
        .set('selectedHeader', action.selectedHeader)
        .set(
          'options',
          filterOptions(state.get('searchText'), action.selectedHeader)
        );
    default:
      return state;
  }
}
