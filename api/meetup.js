var request = require("request");
require("dotenv").config();

module.exports = {
    getMeetup: function() {
        return new Promise((resolve, reject) => {
                var url = 'https://api.meetup.com/2/events/?radius=50.0&order=time&group_urlname=denver-tech&offset=0&format=json&page=20&fields=&key='+ process.env.MEETUP_KEY+'&desc=false&status=upcoming'

            function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(body)
                    };
                }
            request(url, callback);
    });
  }
}
