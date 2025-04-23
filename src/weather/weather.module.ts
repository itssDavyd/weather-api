import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { HttpModule } from '@nestjs/axios';
import { HistoryModule } from 'src/history/history.module';

@Module({
  imports: [HttpModule, HistoryModule],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
