import { ConfigService } from '@nestjs/config';

export const getWheaterApiUrl = (configService: ConfigService) => {
  const apiKey = configService.get<string>('VISUALCROSSING_WEATHER_API_KEY');
  const baseUrl = configService.get<string>(
    'VISUALCROSSING_WEATHER_API_BASE_URL',
  );

  return { apiKey, baseUrl };
};
