const { default: mongoose } = require('mongoose');
//var mongooseDynamic = require ('mongoose-dynamic-schemas');
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/demo" )
.then(() => console.log("connection done"))
.catch((err) => console.log("err"));

var dogSchema = mongoose.Schema({
    name: {type : String, required : true, default : "No name"},
    color : {type : String, required : true, default : "No color"},
    breed : {type : String, required : true, default : "No breed"},
    age : {type : String, required : true, default : "5"},
    children : {type : Number, required : true, default : 2},
});
 
var Dog = mongoose.model('Dogs', dogSchema);


new Dog({ name: 'Rufo', age : "13", familyDogs : [{name : "Pancho", relation : "Son", friendship : 1 }]}).save()
.then(dogs => console.log("1 - "+util.inspect(dogs, false, null)))