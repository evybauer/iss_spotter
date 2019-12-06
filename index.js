const { nextISSTimesForMyLocation } = require('./iss');

const printPass = function(passTime) {
  const datetime = new Date();
  datetime.setUTCSeconds(passTime.risetime);
  console.log(`Next pass at ${datetime} for ${passTime.duration} seconds.`);
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  for (const pass of passTimes) {
    printPass(pass);
  }
});




//PREVIOUS CODE:

// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// fetchCoordsByIP('49.27670', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned Coords:' , coords);
// });

// const resultCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(resultCoords, (error, moveTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });