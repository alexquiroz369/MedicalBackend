// antecedentes-personales.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AntecedentesPersonales } from 'src/entities/antecedentes/antecedentes-personales.entity';

@Injectable()
export class AntecedentesPersonalesService {
  constructor(
    @InjectRepository(AntecedentesPersonales)
    private antecedentesPersonalesRepository: Repository<AntecedentesPersonales>,
  ) {}

  async getAntecedentesPersonalesByPacienteId(idPaciente: number) {
    return this.antecedentesPersonalesRepository.find({ where: { paciente: { ID_Paciente: idPaciente } } });
  }
}
