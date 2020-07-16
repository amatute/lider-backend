const express = require('express');
const productRouter = require('./routes/productsRoutes');
const AppError = require('./utils/AppError');

const app = express();

// 1. Middelwares
app.use(express.json());

app.use((req, res, next) => {
  console.log('Middleware');
  next();
});

// 2. Routes
app.use('/api/v1/products', productRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find: ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
