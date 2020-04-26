import React from 'react';
import Routes from '../client/Routes';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
export default (req) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            {
               renderRoutes(Routes) 
            }
        </StaticRouter>
    );
    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src='bundle.js'></script>
            </body>
        </html>
    `;
}