import { combineReducers } from 'redux';

import ErrorReducer from './ErrorReducer';
import RouteReducer from './RouteReducer';

export default combineReducers({
    errors: ErrorReducer,
    route: RouteReducer,
});
