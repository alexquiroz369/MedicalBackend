// examen-general.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { ExamenGeneralService } from 'src/services/examen-general.service';

@Controller('examen-general')
export class ExamenGeneralController {
  constructor(private readonly examenGeneralService: ExamenGeneralService) {}

  @Get(':idConsulta')
  findOne(@Param('idConsulta') idConsulta: number) {
    return this.examenGeneralService.findByConsultaId(idConsulta);
  }
}
