import * as cors from 'cors';
import * as express from 'express';
import * as path from 'path';
import { cricketers } from './Cricketers'

const app = express();
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to nx-cricket-api!' });
});

// Returns all the cricketers 
app.get('/cricketers', (_, res) => {
  res.send({cricketers});
});

// Returns cricketer: Lazy Search by Name
app.get('/search', (req, res) => {
  const q = ((req.query.q as string) ?? '').toLocaleLowerCase();
  res.send(cricketers.filter( ({ Name }) => 
    Name.toLocaleLowerCase().includes(q)
  ));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
