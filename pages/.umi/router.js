import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


const routes = [
  {
    "component": require('../../../../AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/DefaultLayout.js').default,
    "routes": [
      {
        "path": "/Common/liandong",
        "exact": true,
        "component": () => React.createElement(require('C:/Users/yclnycl/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/Common/liandong' })
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/Info/info",
        "exact": true,
        "component": require('../Info/info.js').default
      },
      {
        "path": "/Top/top",
        "exact": true,
        "component": () => React.createElement(require('C:/Users/yclnycl/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/Top/top' })
      },
      {
        "path": "/index.html",
        "exact": true,
        "component": () => React.createElement(require('C:/Users/yclnycl/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/index.html' })
      }
    ]
  }
];

export default function() {
  return (
<Router history={window.g_history}>
  { renderRoutes(routes) }
</Router>
  );
}
