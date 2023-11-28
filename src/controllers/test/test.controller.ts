import { Controller, Get } from '@nestjs/common';

@Controller('usuarios')
export class UsuarioController {

  @Get()
  getAll(): string {
    return 'Hello World from NestJS!';
  }

}
