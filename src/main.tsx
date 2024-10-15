import { StrictMode } from 'react'
import {Provider} from 'react-redux'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {persistStore} from "redux-persist"
import {PersistGate} from "redux-persist/integration/react"

import ThemeProvider from "./theme/theme-provider";
import {store} from "./app/store";
import App from './App.tsx'

import './index.css'

let persistor = persistStore(store)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <App/>
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
)
