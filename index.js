const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));// static


app.get('/', function (req, res) {
    Contact.find({})
        .then(contacts => {
            return res.render('home', {
                title: "Contacts List",
                Contacts_List: contacts
            });
        })
        .catch(err => {
            console.log('Error in fetching contacts from db:', err);
            return res.redirect('back');
        });
});

app.get('/play', function (req, res) {
    return res.render('practise', {
        title: "Let us Play"
    })
});

app.post('/create-contact', function (req, res) {
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    })
        .then(newContact => {
            return res.redirect('back');
        })
        .catch(err => {
            console.log('Error in creating the contact:', err);
            return res.redirect('back');
        });
});

app.get('/dc/', async function (req, res) {
    try {
        let id = req.query.id;
        await Contact.findByIdAndDelete(id);
        return res.redirect('back');
    } catch (err) {
        console.log('Error in deleting object:', err);
        return res.redirect('back');
    }
});

app.listen(port, function (err) {
    if (err) {
        console.log('Error in Running Server', err);
        return;
    }
    else
        return console.log('Server is Running on Port: ', port);
}); 