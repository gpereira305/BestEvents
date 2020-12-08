import { combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import {reducer as ToastrReducer} from 'react-redux-toastr'; 
import AsyncReducer from '../../../features/async/AsyncReducer';
import AuthReducer from '../../../features/auth/AuthReducer';
import eventReducer from '../../../features/events/eventReducer';
import modalReducer from '../../../features/modals/modalReducer';
import testReducer from '../../../features/testarea/testReducer';
import { firebaseReducer } from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';




const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: AuthReducer,
    async: AsyncReducer,
    toastr: ToastrReducer
})


export default rootReducer;