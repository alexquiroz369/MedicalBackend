// examen-general.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamenGeneralController } from 'src/controllers/examen-general.controller';
import { ExamenGeneralService } from 'src/services/examen-general.service';
import { ExamenGeneral } from 'src/entities/examen-general/examen-general.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExamenGeneral])],
  controllers: [ExamenGeneralController],
  providers: [ExamenGeneralService],
})
export class ExamenGeneralModule {}
