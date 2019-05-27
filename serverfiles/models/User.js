const mongoose = require("mongoose");
const uniqueV = require("mongoose-unique-validator");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

var UserSchema = new mongoose.Schema({
    username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
    email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    bio: String,
    image: String,
    hash: String,
    salt: String,
    groupPermisions: {type: Array, required: [true]}
}, {timestamps: true});

UserSchema.plugin(uniqueV, {message: 'This is already taken.'});

UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512 , 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512 , 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJWT = function(){
    let today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, secret);
};

UserSchema.methods.toAuthJSON = function(){
    return {
        username: this.username,
        email: this.email,
        token: this.generateJWT(),
        bio: this.bio,
        image: this.image,
        groupPermision: this.groupPermisions
    }
}

mongoose.model("User",UserSchema);