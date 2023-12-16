import { Controller, Get } from '@nestjs/common';
import { PacienteEnEsperaService } from 'src/services/paciente-en-espera.service';
import { PacienteEnEspera } from 'src/entities/pacienteEnEspera/pacienteEspera.entity';

@Controller('paciente-en-espera')
export class PacienteEnEsperaController {
  constructor(private readonly pacienteEnEsperaService: PacienteEnEsperaService) {}

  @Get()
  async getPacientesEnEspera(): Promise<PacienteEnEspera[]> {
    return this.pacienteEnEsperaService.getPacientesEnEspera();
  }
}
