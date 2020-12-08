import { combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import AsyncReducer from '../../../features/async/AsyncReducer';
import AuthReducer from '../../../features/auth/AuthReducer';
import eventReducer from '../../../features/events/eventReducer';
import modalReducer from '../../../features/modals/modalReducer';
import testReducer from '../../../features/testarea/testReducer';




const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: AuthReducer,
    async: AsyncReducer,
})


export default rootReducer;