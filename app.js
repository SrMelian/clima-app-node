const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true,
    },
}).argv;

let getInfo = async (direccion) => {
    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let resp = await clima.getClima(coords.lat, coords.lng);

        let sunrise = new Date(resp.sys.sunrise * 1000);
        let sunriseHour = sunrise.getHours();
        let sunriseMinutes = '0' + sunrise.getMinutes();
        let sunriseSeconds = '0' + sunrise.getSeconds();

        let sunset = new Date(resp.sys.sunset * 1000);
        let sunsetHour = sunset.getHours();
        let sunsetMinutes = '0' + sunset.getMinutes();
        let sunsetSeconds = '0' + sunset.getSeconds();

        let output = `En ${coords.direccion} el clima es: \nTemperatura:` + `\t\t${resp.main.temp}°C`.blue;
        output += '\nPresión:' + `\t\t${resp.main.pressure} hPa`.blue;
        output += '\nHumedad:' + `\t\t${resp.main.humidity}%`.blue;
        output += '\nViento velocidad:' + `\t${resp.wind.speed} m/s`.blue;
        output += '\nViento dirección:' + `\t${resp.wind.deg}°`.blue;
        output += '\nNubosidad:' + `\t\t${resp.clouds.all}%`.blue;
        output += '\nAmanecer:' + `\t\t${sunriseHour}:${sunriseMinutes.substr(-2)}:${sunriseSeconds.substr(-2)}`.blue;
        output += '\nAtardecer:' + `\t\t${sunsetHour}:${sunsetMinutes.substr(-2)}:${sunsetSeconds.substr(-2)}`.blue;

        return output;
    } catch (err) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then((mensaje) => console.log(mensaje))
    .catch((err) => console.log(err))