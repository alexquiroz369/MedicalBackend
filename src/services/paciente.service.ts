// paciente.service.ts
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    const Carnet = datosPaciente.Carnet;
    if (Carnet !== undefined) {
      const pacienteExistente = await this.pacienteRepository.findOne({ where: { Carnet } });
      //console.log(pacienteExistente)
      if (pacienteExistente === null) {
        try {
          const pacienteCreado = await this.pacienteRepository.save(datosPaciente);
          return pacienteCreado;
        } catch (error) {
          // Manejo de otros errores
          throw new HttpException('Error al crear el paciente', HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
      else {
        throw new HttpException('Ya existe un paciente con este carnet', HttpStatus.BAD_REQUEST);
      }

    } else {
      throw new HttpException('Error al crear el paciente', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }



  async getAllPacientes(): Promise<Paciente[]> {
    return await this.pacienteRepository.find({ where: { active: true } });
  }
  async getAllPacientesDesactivated(): Promise<Paciente[]> {
    return await this.pacienteRepository.find({ where: { active: false } });
  }

  async getPaciente(idPaciente: number): Promise<Paciente> {
    return this.pacienteRepository.findOne({ where: { ID_Paciente: idPaciente } });
  }
  async editarPaciente(idPaciente: number, pacienteData: Partial<Paciente>): Promise<Paciente> {
    await this.pacienteRepository.update(idPaciente, pacienteData);
    return this.pacienteRepository.findOne({ where: { ID_Paciente: idPaciente } })
  }
  
  async eliminarPaciente(idPaciente: number): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOneOrFail({ where: { ID_Paciente: idPaciente } });
    paciente.active = !paciente.active;
    return this.pacienteRepository.save(paciente);
  }
}
