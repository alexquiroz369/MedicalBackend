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
    // Obtener pacientes ordenados por timestampLlegada de forma descendente
    const pacientes = await this.pacienteEnEsperaRepository.find({
      order: { timestampLlegada: 'ASC' },
    });

    // Formatear el campo timestampLlegada a solo la hora
    pacientes.forEach((paciente) => {
      if (paciente.timestampLlegada instanceof Date) {
        paciente.horaLlegada = paciente.timestampLlegada.toLocaleTimeString();
      }
    });

    return pacientes;
  }
}
