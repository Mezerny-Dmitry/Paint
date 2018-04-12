const initialState = [];

export default function figure(state = initialState, action) {
    switch (action.type) {
        case 'SET_FIGURES':
            return action.payload;

        default:
            return state;
    }
}