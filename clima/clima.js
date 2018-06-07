const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=22f547d0029ddca9b74ba57b138ee32d`);
    
    if (!resp) {
        throw new Error('No hay resultados de temperatura');
    }

    return resp.data;
}

module.exports = {
    getClima,
}