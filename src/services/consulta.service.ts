// consulta.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
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