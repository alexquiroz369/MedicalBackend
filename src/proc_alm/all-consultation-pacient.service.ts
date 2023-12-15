// consulta.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Consulta } from 'src/entities/consulta/consulta.entity';

@Injectable()
export class AllConsultService {
  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {}

  async getAllConsultationsForPatient(pacienteId: number): Promise<Consulta[]> {
    const result = await this.entityManager.query(
      'CALL obtener_citas_paciente(?)',
      [pacienteId],
    );
    return result[0];
  }
}
