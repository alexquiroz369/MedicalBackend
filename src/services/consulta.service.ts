// consulta.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from 'src/entities/consulta/consulta.entity';

@Injectable()
export class ConsultaService {
  constructor(
    @InjectRepository(Consulta)
    private readonly consultaRepository: Repository<Consulta>,
  ) {}

  async getAllConsultas(): Promise<Consulta[]> {
    return this.consultaRepository.find();
  }

  async createConsulta(consultaData: Consulta): Promise<Consulta> {
    const nuevaConsulta = this.consultaRepository.create(consultaData);
    return this.consultaRepository.save(nuevaConsulta);
  }
}
