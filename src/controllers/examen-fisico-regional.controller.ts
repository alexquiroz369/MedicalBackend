// examen-fisico-regional.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { ExamenFisicoRegionalService } from 'src/services/examen-fisico-regional.service';

@Controller('examen-fisico-regional')
export class ExamenFisicoRegionalController {
  constructor(private readonly examenFisicoRegionalService: ExamenFisicoRegionalService) {}

  @Get(':idConsulta')
  findOne(@Param('idConsulta') idConsulta: number) {
    return this.examenFisicoRegionalService.findByConsultaId(idConsulta);
  }
}
