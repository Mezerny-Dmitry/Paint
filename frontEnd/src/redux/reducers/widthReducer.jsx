const initialState = '1';

export default function width(state = initialState, action) {
    switch (action.type) {
        case 'SET_WIDTH':
            return action.payload;

        default:
            return state;
    }
}