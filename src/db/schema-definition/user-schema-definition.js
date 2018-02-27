const ObjectId = require('mongoose').Schema.Types.ObjectId;

const userDefinition = {
    _id: { type: ObjectId, auto: true },
    username: { type: String, required: true, min: [1, 'At lease 1'], max: [2, 'At most 2'] },
    password: { type: String, required: true, min: [1, 'At lease 1'], max: [2, 'At most 2'] },
    isAdmin: { type: Boolean, required: true },
}

module.exports = userDefinition;