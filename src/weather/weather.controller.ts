import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weathers')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get(':locationOrLatLon')
  getWeather(@Param('locationOrLatLon') locationOrLatLon: string) {
    return this.weatherService.getWeather(locationOrLatLon);
  }
}
