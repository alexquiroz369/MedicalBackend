// antecedentes-personales.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { AntecedentesPersonalesService } from 'src/services/antecedentes-personales.service';

@Controller('antecedentes-personales')
export class AntecedentesPersonalesController {
  constructor(private readonly antecedentesPersonalesService: AntecedentesPersonalesService) {}

  @Get(':idPaciente')
  getAntecedentesPersonales(@Param('idPaciente') idPaciente: number) {
    return this.antecedentesPersonalesService.getAntecedentesPersonalesByPacienteId(idPaciente);
  }
}
