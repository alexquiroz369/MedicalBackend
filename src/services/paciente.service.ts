// paciente.service.ts
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from 'src/entities/pacientes/paciente.entity';
import { PacienteDuplicadoException } from 'src/exceptions/paciente-duplicado.exception';
import { SocketGateway } from 'src/gateways/events.gateway';


@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
    private socketGateway: SocketGateway,
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
    const pacienteActualizado = await this.pacienteRepository.findOne({ where: { ID_Paciente: idPaciente } });

    if (!pacienteActualizado) {
      throw new Error(`Paciente ${idPaciente} no encontrado`);
    }

    // Guarda el estado anterior
    const estadoAnterior = pacienteActualizado.enEspera;

    // Verifica si el nuevo valor es diferente al valor actual
    if (pacienteData.enEspera !== undefined && pacienteData.enEspera === estadoAnterior) {
      throw new Error('No se permite actualizar enEspera con el mismo valor.');
    }

    // Actualiza las propiedades del paciente con los datos recibidos
    Object.assign(pacienteActualizado, pacienteData);

    // Actualiza el campo timestampLlegada con el valor del sistema
    pacienteActualizado.timestampLlegada = new Date();

    const pacienteGuardado = await this.pacienteRepository.save(pacienteActualizado);

    // Si el estado 'enEspera' ha cambiado, emite el evento
    if (pacienteGuardado.enEspera !== estadoAnterior) {
      console.log('Enviando evento enEsperaCambiado al cliente...');
      this.socketGateway.server.emit('enEsperaCambiado', { pacienteId: pacienteGuardado.ID_Paciente, enEspera: pacienteGuardado.enEspera });
    }

    return pacienteGuardado;
  }



  async eliminarPaciente(idPaciente: number): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOneOrFail({ where: { ID_Paciente: idPaciente } });
    paciente.active = !paciente.active;
    return this.pacienteRepository.save(paciente);
  }
}
