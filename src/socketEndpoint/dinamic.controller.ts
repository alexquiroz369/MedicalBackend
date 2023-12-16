// tu-servicio.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ServiceDinamic } from './dinamic.service';

@Controller('socket')
export class DinamicController {
  constructor(private readonly tuServicioService: ServiceDinamic) {}

  @Get('cola')
  async obtenerCola(): Promise<any> {
    return this.tuServicioService.obtenerCola();
  }
}
