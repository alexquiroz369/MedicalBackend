// tu-servicio.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from 'src/entities/pacientes/paciente.entity';
import { ServiceGateway } from 'src/gateways/events.gateway';

@Injectable()
export class TuServicioService {
  constructor(
    @InjectRepository(Paciente)
    private paciente: Repository<Paciente>,
    private servicioGateway: ServiceGateway,
  ) {}

  async agregarATuCola(id: number): Promise<void> {
    const item = await this.paciente.findOne({ where: { ID_Paciente: id } });
    if (item && !item.enEspera) {
      item.enEspera = true;
      await this.paciente.save(item);
      this.servicioGateway.handleItemAgregado(item);
    }
  }

  async quitarDeTuCola(id: number): Promise<void> {
    const item = await this.paciente.findOne({ where: { ID_Paciente: id } });
    if (item && item.enEspera) {
      item.enEspera = false;
      await this.paciente.save(item);
      this.servicioGateway.handleItemQuitado(id);
    }
  }

  // Otros métodos de tu servicio
}
