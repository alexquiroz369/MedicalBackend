// tu-servicio.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from 'src/entities/pacientes/paciente.entity';
import { ServiceGateway } from 'src/gateways/events.gateway';

@Injectable()
export class ServiceDinamic {
  constructor(
    @InjectRepository(Paciente)
    private paciente: Repository<Paciente>,
    private servicioGateway: ServiceGateway,
  ) { }

  // tu-servicio.service.ts

  async agregarATuCola(id: number): Promise<void> {
    const item = await this.paciente.findOne({ where: { ID_Paciente: id } });
    if (item && !item.enEspera) {
      item.enEspera = true;
      await this.paciente.save(item);
      console.log('Evento emitido: item agregado');
      this.servicioGateway.handleItemAgregado(item);
    }
  }


  async quitarDeTuCola(id: number): Promise<void> {
    const item = await this.paciente.findOne({ where: { ID_Paciente: id } });
    if (item && item.enEspera) {
      item.enEspera = false;
      await this.paciente.save(item);
      this.servicioGateway.handleItemQuitado(id); // Emite el evento de item quitado
    }
  }

  async obtenerCola(): Promise<Paciente[]> {
    const cola = await this.paciente.find({ where: { enEspera: true }, order: { timestampLlegada: 'ASC' } });
    return cola;
  }

  // Otros métodos de tu servicio
}
