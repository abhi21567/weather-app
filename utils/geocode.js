const request = require("request")


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYWJoaXNoZWsxMjM0NTY3OCIsImEiOiJja3Z0OWI0cjMwanF1Mm5vMmZpZHZraW0yIn0.BRe27CNHKbz4zDzdn4GpWQ&limit=1'
  
    request({url:url,json:true},(error, response) => {
      if(error)
      {
         callback('Unable to connect to location services!',undefined)
      }
      else if (response.body.features.length === 0)
      {
        callback('Unable to connect to location services!',undefined)
      }
      else
      {
       callback(undefined,{
         latitude: response.body.features[0].center[1],
         longitude: response.body.features[0].center[0],
         location: response.body.features[0].place_name
       })
      }
    })
  }

  module.exports = geocode