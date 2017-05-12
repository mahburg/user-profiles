var midExports = module.exports = {};

midExports.auth = function (req,res,next) {
    if (req.query.name == "Yo"){
        next();
    } else {
        res.status(401).send('No way suckka!');
    }
}

midExports.auth2 = function (req,res,next) {
    
}