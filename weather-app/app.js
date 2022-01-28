const axios = require('axios');

const url = 'http://api.weatherstack.com/current?access_key=805c9033cf26c2e8bf0f08c07dc23890&query=35.755052,51.304068';

axios.get(url).then(response => {
    console.log(response.data.current);
}).catch(err => console.log(err))