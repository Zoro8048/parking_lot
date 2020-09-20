import React from 'react';
import Main from './Main';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './appState/reducers';

const store = createStore(allReducers);

class App extends React.Component {
  render() {
    return(
      <Provider store={store} >
        <Main />
      </Provider>
    )
  }
}

export default App;