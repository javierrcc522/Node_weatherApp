const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
  a: { demand: true, alias: 'addressArgv', describe: 'Address to fetch weather for', string: true}
})
.help().alias('help', 'h').argv;

var encodedAddress = encodeURIComponent(argv.addressArgv)

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  if (error){
    console.log('Unable to connect to googles API');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('The address provided does not exit');
  } else if (body.status === 'OK') {
    // console.log(JSON.stringify(body, undefined, 2));
    console.log(`Address; ${body.results[0].formatted_address}`);
    console.log(`Address; ${body.results[0].geometry.location.lat}`);
    console.log(`Address; ${body.results[0].geometry.location.lng}`);
  };
});
