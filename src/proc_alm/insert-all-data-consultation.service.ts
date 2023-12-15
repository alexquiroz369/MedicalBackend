import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Consulta } from 'src/entities/consulta/consulta.entity';
import { DiagnosticoTratamiento } from 'src/entities/diagnostico-tratamiento/diagnostico-tratamiento.entity';
import { ExamenFisicoRegional } from 'src/entities/examen-fisico-regional/examen-fisico-regional.entity';
import { ExamenGeneral } from 'src/entities/examen-general/examen-general.entity';
import { ExamenesComplementarios } from 'src/entities/examenes-complementarios/examenes-complementarios.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ConsultaAllDataService {
  constructor(
    @InjectRepository(Consulta)
    private consultaRepository: Repository<Consulta>,
  ) {}

  async createConsultationAllData(consultaId: number, examenGeneralData: ExamenGeneral, examenFisicoRegionalData: ExamenFisicoRegional, examenesComplementariosData: ExamenesComplementarios, diagnosticoTratamientoData: DiagnosticoTratamiento) {
  try {
    await this.consultaRepository.query(
      'CALL InsertarDatosConsulta(?,?,?,?,?,?,?,?,?,?,?,?)',
      [
        consultaId,
        examenGeneralData.FrecuenciaCardiaca,
        examenGeneralData.FrecuenciaRespiratoria,
        examenGeneralData.Temperatura,
        examenGeneralData.PresionArterial,
        examenGeneralData.Talla,
        examenGeneralData.Peso,
        examenFisicoRegionalData.Observaciones,
        examenesComplementariosData.Tipo_Examen,
        examenesComplementariosData.Resultados,
        diagnosticoTratamientoData.Diagnostico,
        diagnosticoTratamientoData.Tratamiento
      ]
    );
  } catch (error) {
    //console.log(error)
    throw new HttpException({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: 'Ha ocurrido un error, intentelo mas tarde',
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

}
