// examen-general.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExamenGeneral } from 'src/entities/examen-general/examen-general.entity';

@Injectable()
export class ExamenGeneralService {
  constructor(
    @InjectRepository(ExamenGeneral)
    private readonly examenGeneralRepository: Repository<ExamenGeneral>,
  ) {}

  async findByConsultaId(idConsulta: number): Promise<ExamenGeneral[]> {
    return this.examenGeneralRepository.find({
      where: { consulta: { ID_Consulta: idConsulta } },
    });
  }
}
