// diagnostico-tratamiento.controller.ts
import { Controller } from '@nestjs/common';
import { DiagnosticoTratamientoService } from 'src/services/diagnostico-tratamiento.service'; // Ajusta la ruta según tu estructura de proyecto

@Controller('diagnosticos-tratamientos')
export class DiagnosticoTratamientoController {
  constructor(private readonly diagnosticoTratamientoService: DiagnosticoTratamientoService) {}
}
