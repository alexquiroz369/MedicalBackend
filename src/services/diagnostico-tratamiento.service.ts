// diagnostico-tratamiento.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DiagnosticoTratamiento } from 'src/entities/diagnostico-tratamiento/diagnostico-tratamiento.entity'; // Ajusta la ruta según tu estructura de proyecto

@Injectable()
export class DiagnosticoTratamientoService {
  constructor(
    @InjectRepository(DiagnosticoTratamiento)
    private diagnosticoTratamientoRepository: Repository<DiagnosticoTratamiento>,
  ) {}
}
