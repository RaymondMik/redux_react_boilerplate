import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addText } from '../actions';
import App from './App';

/**
 * Make the Redux store available via props to the React application.
 * @param {Object} state - The Redux Store state.
 * @returns {Object} props for the React application.
 */
const mapStateToProps = (state: any)  => {
    return {
        text: state.text
    };
};

/**
 * Wrap Redux Actions into a dispatch call so they may be invoked directly in the React app.
 * @param {Function} dispatch - The Redux Store dispatch method.
 * @returns {Object} action creators wrapped into a dispatch().
 */
const mapDispatchToProps = (dispatch: any) => ({
    addText: (text: string) => dispatch(addText(text)),
});

/**
 * Connect Redux state and actions to the React application.
 */
const Base = connect(mapStateToProps, mapDispatchToProps)(App);

export default Base;