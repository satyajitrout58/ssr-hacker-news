import React from 'react'
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => {
    return (
    <div>
        <h2>My Header</h2>
        {
            renderRoutes(route.routes)
        }
    </div>)
}

export default {
    component: App
}