var AWS = require ('AWS-sdk');
var asl = require('./as')

console.log(asl.banalik);
AWS.config.update({
    region : 'us-east-1',
    accessKeyId : banalik.ka,
    secretAccessKey : banalik.kas
});

var s3 = new AWS.S3()


var params = {
    Body: "password", 
    Bucket: "publicuploadsd3", 
    Key: "pass"
   };
s3.putObject(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});
/*
data = {
    ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
    VersionId: "Bvq0EDKxOcXLJXNo_Lkz37eM3R4pfzyQ"
}
*/
    