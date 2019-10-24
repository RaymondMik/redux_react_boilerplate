import { ADD_TEXT } from '../actions';

/**
 * text reducer
 * @param {Array} state
 * @param {Object} action
 * @returns {Object} a copy of the state modified according to the action dispatched.
 */
const text = (state: object[] = [], action: any) => {
    switch (action.type) {
        case ADD_TEXT:
            return [...state, action.text];
        default:
            return state;
    }
};

export default text;