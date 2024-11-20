import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './i18n'
import StateProvider from './components/context/provider/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <StateProvider>
            <App />
        </StateProvider>
    </BrowserRouter>
);


