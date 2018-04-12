const initialState = '#000';

export default function color(state = initialState, action) {
    switch (action.type) {
        case 'SET_COLOR':
            return action.payload;

        default:
            return state;
    }
}