import { Injectable } from '@nestjs/common';
import { History } from './entities/history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private historyRepository: Repository<History>,
  ) {}

  findAll() {
    //fino
    return this.historyRepository.find();
  }

  findOne(id: number) {
    return this.historyRepository.findOneBy({ id });
  }

  async create(data: Partial<History>): Promise<History> {
    const history = this.historyRepository.create(data);
    return this.historyRepository.save(history);
  }

  async remove(id: number) {
    await this.historyRepository.delete(id);
  }
}
