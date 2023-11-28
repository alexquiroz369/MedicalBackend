// diagnostico-tratamiento.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiagnosticoTratamiento } from 'src/entities/diagnostico-tratamiento/diagnostico-tratamiento.entity'; // Ajusta la ruta según tu estructura de proyecto
import { DiagnosticoTratamientoService } from 'src/services/diagnostico-tratamiento.service'; // Ajusta la ruta según tu estructura de proyecto
import { DiagnosticoTratamientoController } from 'src/controllers/diagnostico-tratamiento.controller'; // Ajusta la ruta según tu estructura de proyecto

@Module({
  imports: [TypeOrmModule.forFeature([DiagnosticoTratamiento])],
  providers: [DiagnosticoTratamientoService],
  controllers: [DiagnosticoTratamientoController],
})
export class DiagnosticoTratamientoModule {}
