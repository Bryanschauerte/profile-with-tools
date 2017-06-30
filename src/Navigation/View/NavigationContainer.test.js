import React from 'react';
import ReactDOM from 'react-dom';
import NavigationContainer from './NavigationContainer';

describe('NavigationContainer', () => {
    it('renders NavigationContainer without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NavigationContainer />, div);
    });
});
