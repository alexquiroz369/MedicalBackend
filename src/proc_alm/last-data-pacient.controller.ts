// database.controller.ts
import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { LastDataService } from './last-data-pacient.service';

@Controller('database')
export class LastDataController {
  constructor(private readonly databaseService: LastDataService) {}

  @Get('/lastdata/:param1')
  async callStoredProc(@Param('param1') param1: number): Promise<any> {
    const resultado = await this.databaseService.callStoredProc(param1);
    if (resultado.length === 0) {
      throw new HttpException('No se encontraron datos', HttpStatus.NOT_FOUND);
    }
    return resultado;
  }
}
