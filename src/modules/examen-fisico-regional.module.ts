// examen-fisico-regional.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamenFisicoRegionalController } from 'src/controllers/examen-fisico-regional.controller';
import { ExamenFisicoRegionalService } from 'src/services/examen-fisico-regional.service';
import { ExamenFisicoRegional } from 'src/entities/examen-fisico-regional/examen-fisico-regional.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExamenFisicoRegional])],
  controllers: [ExamenFisicoRegionalController],
  providers: [ExamenFisicoRegionalService],
})
export class ExamenFisicoRegionalModule {}
