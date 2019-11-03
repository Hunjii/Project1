const express = require('express');
const app = express();
const morgan = require('morgan');

const mongoose = require('mongoose');

// Routes
const productRoutes = require('./api/routes/rooms.js');

// Connect database
mongoose.connect(
  'mongodb+srv://hungji:hungvipka0912@mycluster-9ncca.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }
);

// app.use('/public', express.static(__dirname + '/static-files-dir'));

// /* other routes defined before catch-all */
// app.get('/some-route', (req, res) => {
//   res.send('ok');
// });

// /* final catch-all route to index.html defined last */
// app.get('/*', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use('/api/rooms', productRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
