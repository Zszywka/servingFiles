var buffer = require('buffer');
var path = require('path');
var fs = require('fs');

function encode_base64(filename){
  fs.readFile(path.join(./error404.gif),function(error,data){
    if(error){
      throw error;
    }else{
      var buf = Buffer.from(data);
      var base64 = buf.toString('base64');
      //console.log('Base64 of ddr.jpg :' + base64);
      return base64;
    }
  });
}


function decode_base64(base64str , filename){

  var buf = Buffer.from(base64str,'base64');

  fs.writeFile(path.join(./error404.gif,filename), buf, function(error){
    if(error){
      throw error;
    }else{
      console.log('File created from base64 string!');
      return true;
    }
  });

}

encode_base64('ddr.jpg');
decode_base64('any_base64_string_goes_here','rane.jpg');
