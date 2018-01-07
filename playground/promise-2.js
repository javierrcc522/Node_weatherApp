const request = require('request');

var geocodeAddress = function(address){
  return new Promise(function(resolve, reject) {
    

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to googles API')
      } else if (body.status === 'ZERO_RESULTS') {
        reject('The address provided does not exit');
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geocodeAddress('440 ne suttle st').then(function(location){
  console.log(JSON.stringify(location, undefined, 2));
}, function(errorMessage){
  console.log(errorMessage);
});
