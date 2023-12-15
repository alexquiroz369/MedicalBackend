import { Body, Controller, Post } from '@nestjs/common';
import { ConsultaService } from 'src/services/consulta.service';
import { Consulta } from 'src/entities/consulta/consulta.entity';
import { ExamenGeneral } from 'src/entities/examen-general/examen-general.entity';
import { ExamenFisicoRegional } from 'src/entities/examen-fisico-regional/examen-fisico-regional.entity';
import { ExamenesComplementarios } from 'src/entities/examenes-complementarios/examenes-complementarios.entity';
import { DiagnosticoTratamiento } from 'src/entities/diagnostico-tratamiento/diagnostico-tratamiento.entity';
import { ConsultaAllDataService } from './insert-all-data-consultation.service';

@Controller('allDataconsulta')
export class ConsultaAllDataController {
  constructor(private readonly consultaService: ConsultaAllDataService) {}
  @Post()
  async createConsulta(
    @Body('consultaId') consultaId: number,
    @Body('examenGeneralData') examenGeneralData: ExamenGeneral,
    @Body('examenFisicoRegionalData') examenFisicoRegionalData: ExamenFisicoRegional,
    @Body('examenesComplementariosData') examenesComplementariosData: ExamenesComplementarios,
    @Body('diagnosticoTratamientoData') diagnosticoTratamientoData: DiagnosticoTratamiento
  ) {
    await this.consultaService.createConsultationAllData(consultaId, examenGeneralData, examenFisicoRegionalData, examenesComplementariosData, diagnosticoTratamientoData);
    return { message: 'Se agregaron los datos correctamente' };
  }
}
