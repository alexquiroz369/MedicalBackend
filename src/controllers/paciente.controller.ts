// paciente.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PacienteService } from 'src/services/paciente.service';
import { Paciente } from 'src/entities/pacientes/paciente.entity';

@Controller('pacientes')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  async crearPaciente(@Body() datosPaciente: any) {
    try {
      const paciente = await this.pacienteService.crearPaciente(datosPaciente);
      return { mensaje: 'Paciente creado correctamente', paciente };
    } catch (error) {
      // Manejar la excepción y devolver un mensaje personalizado
      return { mensaje: 'Error al crear el paciente', error: error.message };
    }
  }
  @Get()
  getAllPacientes(): Promise<Paciente[]> {
    return this.pacienteService.getAllPacientes();
  }
}
