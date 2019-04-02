import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import ErrorMessage from '../components/ErrorMessage';
import App from './App';

const Root = ({store}) => (
    <Provider store={store}>
        <App />
        <ErrorMessage />
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root;