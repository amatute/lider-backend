const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({
  path: './config.env'
});

const {
  DB_USER = 'productListUser',
  DB_PASSWORD = 'productListPassword',
  DB_PORT = '27017',
  DB_NAME = 'promotions',
  DB_HOST = 'localhost'
} = process.env;

console.log(
  `db_user:${DB_USER} db_password:${DB_PASSWORD} db_host:${DB_HOST} db_port:${DB_PORT} db_name${DB_NAME}`
);
const DB = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connected 😊'))
  .catch(err => console.error('Could not connect to de database.‌', err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
