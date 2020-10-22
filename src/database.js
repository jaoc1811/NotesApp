const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/notes-db-app', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected to', db.connection.host))
  .catch(err => console.error(err));