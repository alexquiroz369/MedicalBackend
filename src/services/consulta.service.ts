// consulta.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from 'src/entities/consulta/consulta.entity';
import { Paciente } from 'src/entities/pacientes/paciente.entity';

@Injectable()
export class ConsultaService {
  constructor(
    @InjectRepository(Consulta)
    private readonly consultaRepository: Repository<Consulta>,
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  async getAllConsultas(): Promise<Consulta[]> {
    return this.consultaRepository.find();
  }

  async createConsulta(pacienteId: number, consultaData: Consulta): Promise<number> {
    const paciente = await this.pacienteRepository.findOne({ where: { ID_Paciente: pacienteId } });
  
    if (!paciente) {
      throw new Error('Paciente no encontrado');
    }
  
    const nuevaConsulta = this.consultaRepository.create(consultaData);
    nuevaConsulta.paciente = paciente;
  
    const consultaGuardada = await this.consultaRepository.save(nuevaConsulta);
  
    // Retorna el ID de la consulta creada
    return consultaGuardada.ID_Consulta;
  }


  async editarDatosConsulta(idConsulta: number, datos: Partial<Consulta>): Promise<Consulta> {
    const consultaExistente = await this.consultaRepository.findOne({
      where: { ID_Consulta: idConsulta },
    });

    if (!consultaExistente) {
      throw new NotFoundException(`Consulta con ID ${idConsulta} no encontrada`);
    }

    await this.consultaRepository.update(idConsulta, datos);

    // Obtener la consulta actualizada después de la actualización
    const consultaActualizada = await this.consultaRepository.findOne({
      where: { ID_Consulta: idConsulta },
    });

    if (!consultaActualizada) {
      throw new NotFoundException(`Consulta con ID ${idConsulta} no encontrada después de la actualización`);
    }

    return consultaActualizada;
  }
}