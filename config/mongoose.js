// Require library
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Acquire connection (to check if it is successful)
const db = mongoose.connection;

// Handle error
db.on('error', console.error.bind(console, 'Error connecting to DB'));

// Handle success
db.once('open', function () {
    console.log('Database is Connected');
});
