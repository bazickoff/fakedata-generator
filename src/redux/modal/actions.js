const actions = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SET_SEARCH_TEXT: 'SET_SEARCH_TEXT',
  SET_SELECT_HEADER: 'SET_SELECT_HEADER',
  toggleModal: selectedField => ({ type: actions.TOGGLE_MODAL, selectedField }),
  setSearchText: searchText => ({ type: actions.SET_SEARCH_TEXT, searchText }),
  setSelectedHeader: selectedHeader => ({
    type: actions.SET_SELECT_HEADER,
    selectedHeader
  })
};
export default actions;
