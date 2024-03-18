const express = require('express');
const mongoose = require('mongoose');
const eventRouter = require('./routes/events');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/eventDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/api/events', eventRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
