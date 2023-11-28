// database.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { AllDataService } from './all-data-pacient.service';

@Controller('database')
export class AllDataController {
  constructor(private readonly databaseService: AllDataService) {}

  @Get('/alldata/:param1/:param2')
  async callStoredProc(
    @Param('param1') param1: number,
    @Param('param2') param2: number,
  ): Promise<any> {
    return this.databaseService.callStoredProc(param1, param2);
  }
}
