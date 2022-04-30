import { combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from "./Auth";

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export default combineReducers({
    auth: persistedReducer
});