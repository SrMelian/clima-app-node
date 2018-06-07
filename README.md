# Aplicación del Clima - Curso Node

Aplicación de comandos en Node.js que muestra el tiempo en cualquier ciudad del mundo. Basada en peticiones asíncronas a:
* La [API de Google Maps](https://developers.google.com/maps/documentation/geocoding/start?hl=es-419) para obtener las coordenadas de la ciudad introducida por parámetros
* La [API de OpenWeatherMap](https://openweathermap.org/current) para obtener la temperatura actual a partir de las coordenadas.

## Pasos previos

Ejecutar ```$ npm install``` para instalar liberías.

## Uso
```
node app -d "Sydney Australia"
```