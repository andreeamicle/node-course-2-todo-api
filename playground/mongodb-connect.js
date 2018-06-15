// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name:'Andreea', age: 21};
// var {name} = user; //these are equivalent


var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({}, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert', err);
    //     }
    //     console.log(JSON.stringify((result.ops), undefined, 2));
    // });


    // db.collection('users').insertOne({
    //     name: 'Andreea',
    //     age: 21,
    //     location: 'Romania'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();

});