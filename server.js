const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = express.Router();
const PORT = 4000;

// Require Contact model in our routes module
let Contact = require('./contact.model');

//
const app = express();

app.use(cors());
app.use(bodyParser.json());
//mogo URI to connect to my database
mongoose.connect('mongodb+srv://', { useNewUrlParser: true });
const connection = mongoose.connection;

// Once the connection is established, callback
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Defined get data index route
contactRoutes.route('/').get( (req,res) => {
    Contact.find((err, contacts) => {
        if(err)
            console.log(err);
        else {
            res.json(contacts);
        }
    });
});

// Defined edit route
contactRoutes.route('/edit/:id').get((req,res) => {
    const id = req.params.id;
    Contact.findById(id, (err,contact) => {
        res.json(contact);
    });
});

// Defined store route
contactRoutes.route('/add').post((req,res) => {
    const contact = new Contact(req.body);
    contact.save()
        .then( contact => {
            res.status(200).json({'contact': 'contact added successfully'});
        })
        .catch( err => {
            res.status(400).send('adding new contact failed');
        });
});

//  Defined update route
contactRoutes.route('/update/:id').post((req,res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if(!contact)
            res.status(404).send('Data is not found');
        else {
            contact.first_name = req.body.first_name;
            contact.last_name = req.body.last_name;
            contact.email = req.body.email;
            contact.mobile = req.body.mobile;
            contact.save().then( contact => {
                res.json('contact updated');
            })
            .catch( err => {
                res.status(400).send("Update not possible");
            });
        }
    });
});

// Defined delete | remove | destroy route
// contactRoutes.route('/delete/:id').get(function (req, res) {
//     Contact.findByIdAndRemove({_id: req.params.id}, function(err, contact){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

app.use('/contacts', contactRoutes);

//listening for port:4000
app.listen( PORT, () => {
    console.log("Server is running on port " + PORT);
});
