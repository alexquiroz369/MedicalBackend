import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class LastDataService {
  constructor(private readonly connection: Connection) {}

  async callStoredProc(param1: number): Promise<any> {
    const result = await this.connection.query(
      'CALL ObtenerDatosUltimaConsulta(?);',
      [param1],
    );
    return result[0]; // Ajusta esto según la estructura de tu procedimiento almacenado
  }
}
