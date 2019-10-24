/**
 * Add text action creator
 * 
 * @param {String} text
 * @returns {Object} 
 */
export const addText = (text: string) => {
    return {
        type: ADD_TEXT,
        text
    };
};

export const ADD_TEXT: string = 'ADD_TEXT';