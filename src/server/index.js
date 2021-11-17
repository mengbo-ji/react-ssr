import app from './http';
import renderer from './renderer';
import createStore from './createStore';
import routes from '../share/routes';
import { matchRoutes } from 'react-router-config';

app.get('*', (req, res) => {
  const store = createStore();
  // 1.获取请求地址 req.path
  const path = req.path;
  // 2.获取路由信息
  const promise = matchRoutes(routes, path).map(({route}) => {
    return route.loadData?.(store);
  });
  // 3.根据请求地址匹配出要渲染的组件的路由信息
  Promise.all(promise).then(v => {
    res.send(renderer(req, store));
  })
});
