const mongoose = require('mongoose');
const {Schema} = mongoose; // object destructure -- it means take a  properties  "Schema" of mongoose and assign it into Schema variable.
const userSchema = new Schema({
    googleId: String
});
mongoose.model('users', userSchema);
