import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"
import main from "../features/main-slice";

import {apiSlice} from "../features/api";

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const apiMiddlewareList = [apiSlice.middleware]

const persistedReducer = persistReducer(persistConfig, main)

export const store = configureStore({
    reducer: combineReducers ({[apiSlice.reducerPath]: apiSlice.reducer, main: persistedReducer }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck:false
        }).concat(apiMiddlewareList),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
