const initialState = [];

export default function select(state = initialState, action) {
    switch (action.type) {
        case 'SET_SELECT':
            return action.payload;

        default:
            return state;
    }
}