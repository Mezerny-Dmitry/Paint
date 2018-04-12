const initialState = 'pencil';

export default function button(state = initialState, action) {
    switch (action.type) {
        case 'SET_BUTTON':
            return action.payload;

        default:
            return state;
    }
}