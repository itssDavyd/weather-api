<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
</p>

## Description

A NestJS-based project for consulting weather forecasts for forest areas.  
You can retrieve forecasts using either geographic coordinates (latitude/longitude) or location names.

The service returns a 15-day forecast including key weather indicators such as:

- Precipitation
- Temperature (min/max)
- Wind
- Humidity
- And more

Additionally, it maintains a request history, allowing you to log and review previous third-party API queries.

## Project setup

Important, you need to create a `.env` file with the following variable to run the project:

```bash
VISUALCROSSING_WEATHER_API_KEY=YOUR_API_KEY
VISUALCROSSING_WEATHER_API_BASE_URL=https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline
API_URL=http://localhost:3000
DATABASE_HOST=mysql
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=root
DATABASE_NAME=weather_db
```

In VISUALCROSSING_WEATHER_API_KEY you need to put your Visual Crossing API key (you can get it [here](https://www.visualcrossing.com/account/)).

To initialize the project using Docker:

```bash
$ docker-compose build
$ docker-compose up -d
```

## Stay in touch

- Author - David Fernández Román
- Correo - davidfr.work@gmail.com

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
