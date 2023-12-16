import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteEnEsperaController } from 'src/controllers/paciente-en-espera.controller';
import { PacienteEnEspera } from 'src/entities/pacienteEnEspera/pacienteEspera.entity';
import { PacienteEnEsperaService } from 'src/services/paciente-en-espera.service';

@Module({
  imports: [TypeOrmModule.forFeature([PacienteEnEspera])],
  providers: [PacienteEnEsperaService],
  controllers: [PacienteEnEsperaController],
})
export class PacientesEnEsperaModule {}
