import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './State/store';
import Home from './Views/Home/Home';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Home/>
                </div>
            </Provider>
        );
    }
}

export default App;
