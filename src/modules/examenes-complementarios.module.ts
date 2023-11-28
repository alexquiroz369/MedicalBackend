// examenes-complementarios.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamenesComplementarios } from 'src/entities/examenes-complementarios/examenes-complementarios.entity';
import { ExamenesComplementariosController } from 'src/controllers/examenes-complementarios.controller';
import { ExamenesComplementariosService } from 'src/services/examenes-complementarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExamenesComplementarios])],
  controllers: [ExamenesComplementariosController],
  providers: [ExamenesComplementariosService],
})
export class ExamenesComplementariosModule {}
