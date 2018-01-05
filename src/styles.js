const colors = {
  white: '#fff',
  black: '#000',
  primary: '#21C6E1',
  transparent: 'rgba(0,0,0,0)',
  ash: '#efefef',
  bg: 'rgba(0, 0, 0, 0.5)',
  header: '#bcbcbc'
};
const titleStyle = {
  body: {
    witdth: '100%',
    height: '10vh',
    margin: '2px',
    textAlign: 'center',
    color: colors.primary
  }
};
const dataModalStyle = {
  modalBody: { height: '100%', display: 'flex', flexDirection: 'column' },
  modalHeader: { witdth: '100%', flex: 1, textAlign: 'center' },
  topbar: { flex: 1.5, display: 'flex', margin: '5px' },
  footer: { display: 'flex', flex: 1, marginTop: '5px' },
  inputSearch: { flex: 2, margin: '5px' },
  selectFormat: { flex: 1, margin: '5px', paddingTop: '1vh' },
  codeBlock: { flex: 9, overflow: 'auto' },
  button: { margin: 'auto', fontSize: '20px' },
  buttonWrapper: { flex: '1', display: 'flex', justofyContent: 'center' }
};
const fieldsField = {
  height: '7vh',
  margin: '5px',
  lineHeight: '7vh'
};
const fieldsStyle = {
  body: { width: '100%', height: '70vh' },
  fieldsContainer: { width: '100%', height: '62vh', overflow: 'auto' },
  field: fieldsField,
  header: {
    height: '5vh',
    margin: '2px 5px',
    lineHeight: '5vh',
    textAlign: 'center',
    align: 'center',
    color: colors.primary
  },
  headerBody: {
    height: '6vh',
    display: 'flex',
    background: colors.white,
    margin: '2px 10px',
    padding: '0px 10px',
    position: 'relative',
    borderRadius: '5px',
    fontStyle: 'bold',
    marginBottom: '5px'
  },
  singleField: {
    height: '9vh',
    background: colors.white,
    borderRadius: '5px',
    display: 'flex',
    margin: '3px 10px',
    padding: '0px 10px',
    position: 'relative'
  },
  singleFieldTitle: {
    ...fieldsField,
    flex: 30,
    background: colors.ash,
    textAlign: 'center',
    align: 'center',
    border: `1px solid ${colors.primary}`,
    overflow: 'auto'
  },
  deleteField: {
    ...fieldsField,
    height: '100%',
    flex: 1,
    textAlign: 'right'
  },
  ls: { margin: 'auto', flex: 25, height: '7vh', paddingTop: '2vh' }
};
const fieldTypeModalStyle = {
  header: { witdth: '100%', textAlign: 'center' },
  topbar: { height: '7%', display: 'flex' },
  inputSearch: { flex: 2, height: '100%', margin: '5px' },
  select: { flex: 1, height: '100%', margin: '5px', paddingTop: '.7vh' },
  options: { height: '70%', overflowY: 'auto', margin: '5px' }
};
const footerStyle = {
  body: {
    width: '100%',
    height: '7vh',
    display: 'flex',
    margin: '3px'
  },
  button: { margin: 'auto', fontSize: '20px' },
  buttonWrapper: {
    flex: '1',
    display: 'flex',
    justofyContent: 'center'
  },
  divWrapper: { display: 'flex', justofyContent: 'center' }
};
const bodyStyle = {
  width: '25vw',
  height: '100vh',
  position: 'absolute',
  overflow: 'auto',
  background: colors.bg,
  textAlign: 'center',
  borderRadius: '5px',
  zIndex: 1,
  padding: '3px',
  right: '0px',
  transition: 'all .8s ease'
};
const schemaComponentStyle = {
  display: 'flex',
  color: 'white',
  textAlign: 'justify',
  fontSize: '1em',
  padding: '2px'
};
const scheemaListStyle = {
  body: { ...bodyStyle, zIndex: 1, opacity: 1 },
  bodyHidden: { ...bodyStyle, zIndex: -1, opacity: 0 },
  header: { fontSize: '1.5em', color: colors.primary },
  schemaComponent: schemaComponentStyle,
  selectedSchemaComponent: {
    ...schemaComponentStyle,
    color: 'black',
    background: 'white',
    borderRadius: '5px'
  },
  schemaInfo: { flex: 5 },
  deleteSchema: {
    flex: 1,
    textAlign: 'right',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  schemaFileName: {
    fontWeight: 'bold',
    marginRight: '5px',
    fontStyle: 'italic'
  },
  updatedTime: { fontSize: '.7em' }
};
const topbarStyle = {
  body: {
    width: '100%',
    height: '7vh',
    display: 'flex',
    margin: '2px'
  },
  button: { margin: '2px' },
  buttonWrapper: {
    flex: 1,
    display: 'flex',
    justofyContent: 'center'
  },
  langWrapper: { flex: 2, display: 'flex', justofyContent: 'center' },
  languageSwitcher: { margin: 'auto', width: '80%', paddingTop: '2vh' },
  langDiv: { display: 'flex', flex: 4 },
  savedDiv: { display: 'flex', flex: 2, justofyContent: 'center' }
};
const fieldsOptionStyle = {
  body: {
    ...fieldsStyle.field,
    flex: 100,
    margin: 0,
    position: 'relative',
    display: 'flex'
  },
  optionHeader: {
    color: colors.header,
    fontSize: '2vh',
    flex: 1,
    paddingRight: '2px',
    overflow: 'hidden'
  },
  singleOption: {
    flex: 1,
    display: 'flex',
    margin: '0px 2px',
    marginTop: '1vh',
    height: '7vh'
  },
  singleOptionBody: { flex: 2 }
};
const singleFieldTypeStyle = {
  body: {
    display: 'inline-block',
    width: '30%',
    height: '40px',
    lineHeight: '40px',
    margin: '5px',
    textAlign: 'center',
    border: `1px solid ${colors.primary}`,
    overflow: 'auto'
  },
  title: { fontStyle: 'bold', overflow: 'auto' },
  header: { lineHeight: '20px' },
  toolTip: {
    style: { background: colors.black, padding: 5, boxShaddow: colors.header },
    arrowStyle: { color: colors.black, borderColor: false }
  },
  tooltipDesc: { display: 'flex' },
  tooltipTitle: {
    width: '8vw',
    color: colors.ash,
    fontSize: '.7em',
    padding: '0px 2px',
    margin: 0
  },
  tooltipValue: {
    width: '20vw',
    fontSize: '.8em',
    color: colors.white,
    padding: '0px 2px',
    margin: 0
  }
};
export {
  colors,
  titleStyle,
  dataModalStyle,
  fieldsStyle,
  fieldTypeModalStyle,
  footerStyle,
  scheemaListStyle,
  topbarStyle,
  fieldsOptionStyle,
  singleFieldTypeStyle
};
