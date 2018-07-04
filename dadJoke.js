const fs = require('fs');
const axios = require('axios');
const endpoint = process.argv[2];

axios
  .get(`https://icanhazdadjoke.com/search?term=${endpoint}`, {
    headers: {
      Accept: 'application/json'
    },
    data: {}
  })
  .then(res => {
    let joke = res.data.results[0].joke;
    console.log(joke);
    fs.writeFile('jokes.txt', joke, function(err) {
      if (err) {
        console.error(err);
        return process.exit(1);
      }
    });
  })
  .catch(err =>
    console.log('No jokes match that search term.  Please try again.')
  );
