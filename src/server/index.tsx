import express from 'express';
import path from 'path';

const app: express.Application = express();

const pathStatic = path.resolve('./dist/client');
console.log('path to static ->', pathStatic);
app.use('/', express.static(pathStatic));

app.listen(3001, () => {
  console.log('Server is running --> port 3000');
});
