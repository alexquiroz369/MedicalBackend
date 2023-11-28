// examen-fisico-regional.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExamenFisicoRegional } from 'src/entities/examen-fisico-regional/examen-fisico-regional.entity';

@Injectable()
export class ExamenFisicoRegionalService {
  constructor(
    @InjectRepository(ExamenFisicoRegional)
    private readonly examenFisicoRegionalRepository: Repository<ExamenFisicoRegional>,
  ) {}

  async findByConsultaId(idConsulta: number): Promise<ExamenFisicoRegional[]> {
    return this.examenFisicoRegionalRepository.find({
      where: { consulta: { ID_Consulta: idConsulta } },
    });
  }
}
