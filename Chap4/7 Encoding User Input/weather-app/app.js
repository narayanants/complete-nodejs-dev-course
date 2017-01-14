const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
    a : {
        demand:true,
        alias:'address',
        describe:'Address to fetch weather for',
        string:true
    }    
})
.help()
.alias('help','h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);


request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true

},(error,response,body)=>{
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude; ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});

/* 
    headers => set by Google
*/

/*
    > encodeURIComponent('1301 lombard street philadephia')
    '1301%20lombard%20street%20philadephia'
    > decodeURIComponent('Andrew%20Mead')
    'Andrew Mead'
 */





