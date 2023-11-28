// antecedentes-personales.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AntecedentesPersonales } from 'src/entities/antecedentes/antecedentes-personales.entity';
import { AntecedentesPersonalesController } from 'src/controllers/antecedentes-personales.controller';
import { AntecedentesPersonalesService } from 'src/services/antecedentes-personales.service';

@Module({
  imports: [TypeOrmModule.forFeature([AntecedentesPersonales])],
  controllers: [AntecedentesPersonalesController],
  providers: [AntecedentesPersonalesService],
})
export class AntecedentesPersonalesModule {}
