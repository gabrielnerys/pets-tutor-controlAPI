require('dotenv').config();
const cors = require('cors');
const app = require('./app');

const { API_PORT } = process.env;

app.use(cors());
app.get('/', (_request, response) => {
  response.send();
});

app.listen(API_PORT, () => console.log('ouvindo porta', API_PORT));
