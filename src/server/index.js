import app from './http';
import renderer from './renderer';

app.get('*', (req, res) => {
  res.send(renderer(req));
});
