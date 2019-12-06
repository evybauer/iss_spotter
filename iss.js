/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */


const request = require('request');

const fetchMyIP = function(callback) {

  const ip = `https://api.ipify.org?format=json`;
  request(ip, (error, resp, body) => {

    // error can be set if invalid domain, user is offline, etc.
    if (error) return callback(error, null);

    // if non-200 status, assume server error
    if (resp.statusCode !== 200) {
      callback(Error(`Status Code ${resp.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    console.log(ip);
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};


const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body).data;

    callback(null, { latitude, longitude });
  });
};


//module.exports = { fetchMyIP  };
module.exports = { fetchCoordsByIP };

	


