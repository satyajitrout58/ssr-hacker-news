import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Homs';
import Routes from './Routes'
import {BrowserRouter} from 'react-router-dom'
import { renderRoutes } from 'react-router-config';

ReactDOM.hydrate(
    <BrowserRouter>
        {
            renderRoutes(Routes)
        }
    </BrowserRouter>
    , document.getElementById("root")); 