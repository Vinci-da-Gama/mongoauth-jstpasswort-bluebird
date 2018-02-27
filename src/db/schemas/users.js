const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchemaObj = require('../schema-definition/user-schema-definition');
const UserSchema = new Schema(userSchemaObj);

exports.UserSchema = UserSchema;
