// database.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { LastDataService } from './last-data-pacient.service';

@Controller('database')
export class LastDataController {
  constructor(private readonly databaseService: LastDataService) {}

  @Get('/lastdata/:param1')
  async callStoredProc(
    @Param('param1') param1: number,
  ): Promise<any> {
    return this.databaseService.callStoredProc(param1);
  }
}
