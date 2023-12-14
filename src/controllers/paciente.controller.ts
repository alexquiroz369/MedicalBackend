// paciente.controller.ts
import { Controller, Get, Post, Body, Put, Param, HttpException, HttpStatus, Delete } from '@nestjs/common';
import { PacienteService } from 'src/services/paciente.service';
import { Paciente } from 'src/entities/pacientes/paciente.entity';
import { PacienteDuplicadoException } from 'src/exceptions/paciente-duplicado.exception';

@Controller('pacientes')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) { }

  @Post()
  async crearPaciente(@Body() datosPaciente: any) {
    const paciente = await this.pacienteService.crearPaciente(datosPaciente);
    return { mensaje: 'Paciente creado correctamente', paciente };
  }
  @Get()
  getAllPacientes(): Promise<Paciente[]> {
    return this.pacienteService.getAllPacientes();
  }
  @Get('/deactivated')
  getAllPacientesFalse(): Promise<Paciente[]> {
    return this.pacienteService.getAllPacientesDesactivated();
  }
  @Get(':idPaciente')
  getPaciente(@Param('idPaciente') idPaciente: number): Promise<Paciente> {
    return this.pacienteService.getPaciente(idPaciente);
  }

  @Put(':idPaciente')
  async editarPaciente(
    @Param('idPaciente') idPaciente: number,
    @Body() pacienteData: Partial<Paciente>,
  ): Promise<Paciente> {
    return this.pacienteService.editarPaciente(idPaciente, pacienteData);
  }

  @Delete(':idPaciente')
  async eliminarPaciente(@Param('idPaciente') idPaciente: number): Promise<{ mensaje: string }> {
    try {
      const paciente = await this.pacienteService.eliminarPaciente(idPaciente);
      const mensaje = paciente.active ? 'Paciente reactivado correctamente' : 'Paciente desactivado correctamente';
      return { mensaje };
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'No se pudo cambiar el estado del paciente, por favor intente de nuevo más tarde.',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  

}
