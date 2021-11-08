import React from 'react';
import ReactDom from 'react-dom';
import Home from '../share/pages/Home';

// hydrate 复用源节点 为节点添加事件
ReactDom.hydrate(<Home />, document.getElementById('root'));
