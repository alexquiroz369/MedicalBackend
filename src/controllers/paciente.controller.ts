// paciente.controller.ts
import { Controller, Get, Post, Body, Put, Param, HttpException, HttpStatus } from '@nestjs/common';
import { PacienteService } from 'src/services/paciente.service';
import { Paciente } from 'src/entities/pacientes/paciente.entity';
import { PacienteDuplicadoException } from 'src/exceptions/paciente-duplicado.exception';

@Controller('pacientes')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  async crearPaciente(@Body() datosPaciente: any) {
    const paciente = await this.pacienteService.crearPaciente(datosPaciente);
    return { mensaje: 'Paciente creado correctamente', paciente };
  }
  
  
  @Get()
  getAllPacientes(): Promise<Paciente[]> {
    return this.pacienteService.getAllPacientes();
  }

  @Put(':idPaciente')
  async editarPaciente(
    @Param('idPaciente') idPaciente: number,
    @Body() pacienteData: Partial<Paciente>,
  ): Promise<Paciente> {
    return this.pacienteService.editarPaciente(idPaciente, pacienteData);
  }
}
