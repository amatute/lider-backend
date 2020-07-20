const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/productsRoutes');
const AppError = require('./utils/AppError');

const app = express();
app.use(cors());

// 1. Middelwares
app.use(express.json());

// 2. Routes
app.use('/api/v1/products', productRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find: ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
