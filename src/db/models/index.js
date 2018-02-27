const mongoose = require('mongoose');
const userSchema = require('../schemas/users').UserSchema;
const UserModel = mongoose.model('AppUser', userSchema);

exports.UserModel = UserModel;
