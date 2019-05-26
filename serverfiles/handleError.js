module.exports = function(err, req, res, next){
    if(typeof (err) === 'string'){
        return res.status(400).json({ mesage: err, from: 'Server Generic error' });
    }

    if(err.name === "UnauthorisedError") {
        //error from jwt
        return res.status(401).json({message: 'Invalid Jsont token', from: "Failed to authenticate" });
    }

    return res.status(500).json({ message: err.message });
}