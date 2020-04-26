import React from 'react';
import Home from './pages/Homs'
import App from './App'

export default [
    {
       ...App,
       routes: [
            {
                path: '/',
                exact: true,
                ...Home
            }
       ]
    }
]


