import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Fork from './components/fork';
import Title from './components/title';
import Fields from './containers/Fields';
import FieldTypeModal from './containers/FieldTypeModal';
import DataModal from './containers/DataModal';
import TopBar from './containers/TopBar';
import Footer from './containers/Footer';
import SchemaList from './containers/SchemaList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <SchemaList />
          <Title />
          <TopBar />
          <Fields />
          <Footer />
          <FieldTypeModal />
          <DataModal />
          <Fork />
        </div>
      </Provider>
    );
  }
}

export default App;
