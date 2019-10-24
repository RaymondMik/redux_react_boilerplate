import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initStore } from './store';
import Base from './components/Base';

const store = initStore();

/**
 * Render React application
 */
ReactDOM.render(
    <Provider store={store}>
        <Base />
    </ Provider>,
    document.getElementById('application')
);