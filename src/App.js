require('normalize.css');

import { Provider } from 'react-redux';
import { store } from './stateManagement/store';
import React, { Component } from 'react';
import './App.css';
import ContentDisplay from './ContentDisplay/ContentDisplay';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ContentDisplay/>
            </Provider>
        );
    }
}

export default App;
