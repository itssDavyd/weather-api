import { HistoryService } from './../history/history.service';
import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { getWheaterApiUrl } from 'src/config/weather-api.config';
import { Day, Hour, WeatherData } from './interfaces/weather-data.interface';

@Injectable()
export class WeatherService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
    private historyService: HistoryService,
  ) {}

  // Function to get the weather data from the external API
  async getWeather(locationOrLatLon: string) {
    const { apiKey, baseUrl } = getWheaterApiUrl(this.configService);
    const url = `${baseUrl}/${locationOrLatLon}?key=${apiKey}`;
    const urlReal = `${this.configService.get<string>('API_URL')}/weathers/${locationOrLatLon}`;
    const response: AxiosResponse<WeatherData> = await firstValueFrom(
      this.httpService.get(url),
    );

    if (response.status !== 200) {
      throw new HttpException(
        'Weather API is down',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }

    // Insert history when the request is successful
    await this.historyService.create({
      url_real: urlReal,
      url: url,
      param_search: locationOrLatLon,
    });

    return this.makeResponse(response);
  }

  // Function to make the response from the API
  private makeResponse(response: AxiosResponse<WeatherData>): WeatherData {
    return {
      latitude: response.data.latitude,
      longitude: response.data.longitude,
      resolvedAddress: response.data.resolvedAddress,
      adress: response.data.adress,
      timezone: response.data.timezone,
      description: response.data.description,
      days: response.data.days.map((day: Day) => ({
        datetime: day.datetime,
        tempmax: day.tempmax,
        tempmin: day.tempmin,
        temp: day.temp,
        humedity: day.humedity,
        presure: day.presure,
        precip: day.precip,
        precipprob: day.precipprob,
        preciptype: day.preciptype,
        hours: day.hours.map((hour: Hour) => ({
          datetime: hour.datetime,
          temp: hour.temp,
          humedity: hour.humedity,
          presure: hour.presure,
          visibility: hour.visibility,
          conditions: hour.conditions,
          precip: hour.precip,
          precipprob: hour.precipprob,
        })),
        description: day.description,
        conditions: day.conditions,
      })),
    };
  }
}
