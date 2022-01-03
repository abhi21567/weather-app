const request = require('request')

const geocode = require('./utils/geocode')

const forecast = require('./utils/forecast')
// const url = 'http://api.weatherstack.com/current?access_key=1ce03c3511f29296c69e1dc04358adc4&query=37.8267,-122.4233&units=f'
// //37.8267,-122.4233   pk.eyJ1IjoiYWJoaXNoZWsxMjM0NTY3OCIsImEiOiJja3Z0OWI0cjMwanF1Mm5vMmZpZHZraW0yIn0.BRe27CNHKbz4zDzdn4GpWQ
// request({url:url,json:true}, (error, response) => {
//   if(error)
//   {
//     console.log("Unable to connect to weather service!")
//   }
//   else if(response.body.error){
//     console.log("Unable to connect to weather service!!!")
//   }
//   else
//   {
//     console.log("it is currently "+response.body.current.temperature+" degrees out. it feels like "+response.body.current.feelslike+" degrees")
//   }
 
// })

const adress = process.argv[2]

if(!adress)
{
  console.log('Please provide the adress!!!')
}
else{
geocode(adress,(error, {latitude, longitude, location} = {}) => {
 if(error)
 {
   console.log(error)
 }
 else {
  forecast(latitude, longitude, (error, {weather_description, temperature, feelslike} = {}) => {
    if(error)
    {
      console.log(error)
    }
    else 
    {
      console.log('weather_description:  '+weather_description)
      console.log('temperature:  '+temperature)
      console.log('feelslike:  '+feelslike)
      console.log('location:  '+location)
     
      console.log('whatsaap group link =  '+'https://chat.whatsapp.com/JTDxahjz53gKGfyjP6uLrw')
    }
   
  })
 }
})

}

//37.8267,-122.4233      -75.7088, 44.1545


