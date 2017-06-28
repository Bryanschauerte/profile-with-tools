import React, { Component } from 'react';
import logo from './logo.svg';
import './_shared.scss';
import './App.css';
import Column from './Layout/Column';
import Row from './Layout/Row';
import Card from './Layout/Card';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Column>
                    <Card>
                        <div className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h2>Welcome to React</h2>
                            <p className="App-intro">
                      To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                        </div>
                    </Card>
                    <Card>
                        <div className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h2>Welcome to React</h2>
                            <p className="App-intro">
                      To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                        </div>
                    </Card>
                    <Card>
                        <div className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h2>Welcome to React</h2>
                            <p className="App-intro">
                      To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                        </div>
                    </Card>
                </Column>
            </div>
        );
    }
}

export default App;
