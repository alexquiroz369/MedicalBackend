// paciente.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'src/entities/pacientes/paciente.entity';
import { PacienteController } from 'src/controllers/paciente.controller';
import { PacienteService } from 'src/services/paciente.service';
import { ServiceDinamic } from 'src/socketEndpoint/dinamic.service';
import { ServiceGateway } from 'src/gateways/events.gateway';
import { DinamicController } from 'src/socketEndpoint/dinamic.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente])],
  controllers: [PacienteController, DinamicController],
  providers: [PacienteService, ServiceDinamic, ServiceGateway],
})
export class PacienteModule {}
