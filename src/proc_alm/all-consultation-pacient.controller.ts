// consulta.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { AllConsultService } from './all-consultation-pacient.service';
import { Consulta } from 'src/entities/consulta/consulta.entity';

@Controller('')
export class AllConsultController {
  constructor(private readonly consultaService: AllConsultService) {}

  @Get('all-consultation-pacient/:id')
  async getAllConsultationsForPatient(@Param('id') pacienteId: number): Promise<Consulta[]> {
    return this.consultaService.getAllConsultationsForPatient(pacienteId);
  }
}
