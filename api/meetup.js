var request = require("request");
require("dotenv").config();

module.exports = {
    getMeetup: function() {
        return new Promise((resolve, reject) => {
                var url = 'https://api.meetup.com/self/events?photo-host=public&page=20&key=461e18115b2357727591361195d3f50'

            function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(body)
                    };
                }
            request(url, callback);
    });
  }
}
