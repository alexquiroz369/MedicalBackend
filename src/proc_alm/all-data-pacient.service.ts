// database.service.ts
import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class AllDataService {
  constructor(private readonly connection: Connection) {}

  async callStoredProc(param1: number, param2: number): Promise<any> {
    const result = await this.connection.query(
      'CALL ObtenerDatosPacienteConsulta(?, ?);',
      [param1, param2],
    );
    return result[0]; // Ajusta esto según la estructura de tu procedimiento almacenado
  }
}
