// paciente.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from 'src/entities/pacientes/paciente.entity';
import { PacienteDuplicadoException } from 'src/exceptions/paciente-duplicado.exception';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) { }


  async crearPaciente(datosPaciente: any): Promise<Paciente> {
    const { Carnet } = datosPaciente;

    // Verificar si ya existe un paciente con el mismo Carnet
    const pacienteExistente = await this.pacienteRepository.findOne({ where: { Carnet } });

    if (pacienteExistente) {
      throw new PacienteDuplicadoException();
    }

    // Crear el paciente si no hay duplicados
    return this.pacienteRepository.save(datosPaciente);
  }

  async getAllPacientes(): Promise<Paciente[]> {
    return await this.pacienteRepository.find();
  }
}
