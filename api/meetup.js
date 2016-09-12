var request = require("request");
require("dotenv").config();

module.exports = {
    getMeetup: function() {
        return new Promise((resolve, reject) => {
                var url = 'https://api.meetup.com/self/events?&sign=true&photo-host=public&scroll=next_upcoming&page=20&key=' + process.env.MEETUP_KEY;

            function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                  console.log("Got to here")
                    resolve(body)
                    };
                }
            request(url, callback);
    });
  }
}
