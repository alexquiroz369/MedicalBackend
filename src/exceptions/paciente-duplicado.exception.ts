// exception/paciente-duplicado.exception.ts

import { HttpException, HttpStatus } from '@nestjs/common';

export class PacienteDuplicadoException extends HttpException {
  constructor() {
    super('Ya existe un paciente con este carnet', HttpStatus.BAD_REQUEST);
  }
}
