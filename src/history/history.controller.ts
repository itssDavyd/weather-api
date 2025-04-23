import { Controller, Delete, Get, Param } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('histories')
export class HistoryController {
  constructor(private historyService: HistoryService) {}
  @Get()
  getHistories() {
    return this.historyService.findAll();
  }

  @Get(':id')
  getHistoryById(@Param('id') id: number) {
    return this.historyService.findOne(id);
  }

  @Delete(':id')
  removeHistoryById(@Param('id') id: number) {
    return this.historyService.remove(id);
  }
}
