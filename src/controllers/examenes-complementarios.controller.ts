// examenes-complementarios.controller.ts
import { Controller } from '@nestjs/common';
import { ExamenesComplementariosService } from 'src/services/examenes-complementarios.service';

@Controller('examenes-complementarios')
export class ExamenesComplementariosController {
  constructor(private readonly examenesComplementariosService: ExamenesComplementariosService) {}
}
