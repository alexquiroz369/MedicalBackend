// consulta.controller.ts
import { Controller, Get, Post, Body, Param, ParseIntPipe, Put } from '@nestjs/common';
import { ConsultaService } from 'src/services/consulta.service';
import { Consulta } from 'src/entities/consulta/consulta.entity';

@Controller('consultas')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Get()
  async getAllConsultas(): Promise<Consulta[]> {
    return this.consultaService.getAllConsultas();
  }

  @Post()
  async createConsulta(@Body() consultaData: Consulta): Promise<Consulta> {
    return this.consultaService.createConsulta(consultaData);
  }
  
  @Put(':idConsulta')
  async editarDatosConsulta(
    @Param('idConsulta', ParseIntPipe) idConsulta: number,
    @Body() datos: Partial<Consulta>,
  ) {
    const consultaActualizada = await this.consultaService.editarDatosConsulta(idConsulta, datos);
    return { consulta: consultaActualizada };
  }
}
