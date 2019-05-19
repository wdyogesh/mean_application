const express = require('express');

var router = express.Router();

var { Admin } = require('../models/admin');

//localhost:3000/admins/

router.get('/', (req,res)=>{
    Admin.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error to geeting data :' + JSON.stringify(err, undefined, 2));
        }
    })
})

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
         return res.status(400).send(`No id found in admin table : ${req.params.id} `);
     }
    Admin.findById(req.params.id, (err, docs)=> {
        if (!err) {
            res.send(docs)
        }
        else {
            console.log('Error unable to find details : ' + JSON.stringify(err, undefined, 2));
        }
    })
})

router.post((req, res)=>{
    var admin = new Admin ({
        name : req.body.name,
        role: req.body.role,
        description: req.body.description
    })
    admin.save((err, docs)=>{
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error to save data :' + JSON.stringify(err, undefined,2));
        }
    })
})

module.exports = router;