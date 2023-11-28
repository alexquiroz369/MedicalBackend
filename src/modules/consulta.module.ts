// consulta.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consulta } from 'src/entities/consulta/consulta.entity';
import { ConsultaController } from 'src/controllers/consulta.controller';
import { ConsultaService } from 'src/services/consulta.service';

@Module({
  imports: [TypeOrmModule.forFeature([Consulta])],
  controllers: [ConsultaController],
  providers: [ConsultaService],
})
export class ConsultaModule {}
