import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import reducer from './todo';

export const rootReducer = combineReducers({
    form: reduxForm,
    reducer,
})