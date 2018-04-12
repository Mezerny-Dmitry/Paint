import { combineReducers } from 'redux'
import button from './buttonReducer';
import color from './colorReducer';
import figures from './figuresReduser';
import select from './selectReducer';
import width from './widthReducer';

export default combineReducers({
    button,
    color,
    figures,
    select,
    width
})