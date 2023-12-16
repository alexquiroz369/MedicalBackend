import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PacienteEnEspera } from 'src/entities/pacienteEnEspera/pacienteEspera.entity';

@Injectable()
export class PacienteEnEsperaService {
  constructor(
    @InjectRepository(PacienteEnEspera)
    private readonly pacienteEnEsperaRepository: Repository<PacienteEnEspera>,
  ) {}

  async getPacientesEnEspera(): Promise<PacienteEnEspera[]> {
    return this.pacienteEnEsperaRepository.find();
  }
}
