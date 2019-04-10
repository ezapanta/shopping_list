const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const app = express();

// body-parser Middleware
app.use(bodyParser.json());

// db config
const db = require('./config/keys').mongoURI;

// connect to mongodb

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch( err => console.log(err));

// routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

