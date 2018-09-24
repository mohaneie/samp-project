const mongoose = require('mongoose');
const z = mongoose.connect('mongodb://localhost/bigcollection', {useNewUrlParser: true})
.then(() => {
    console.log('dbconnected')
})

.catch((error) => {
    console.log(error)
})

// i have changed some data on here


