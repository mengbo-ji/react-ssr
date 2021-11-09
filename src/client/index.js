import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from '../share/routes';
import { renderRoutes } from 'react-router-config';

// hydrate 复用源节点 为节点添加事件
ReactDom.hydrate(<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>, document.getElementById('root'));
