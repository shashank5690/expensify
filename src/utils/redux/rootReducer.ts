import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../../Screens/ScreenLogin/redux/authSlice';
import transactionReducer from './transactionSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    transaction: transactionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;
export default rootReducer;