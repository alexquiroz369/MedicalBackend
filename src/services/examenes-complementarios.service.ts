// examenes-complementarios.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExamenesComplementarios } from 'src/entities/examenes-complementarios/examenes-complementarios.entity';

@Injectable()
export class ExamenesComplementariosService {
  constructor(
    @InjectRepository(ExamenesComplementarios)
    private examenesComplementariosRepository: Repository<ExamenesComplementarios>,
  ) {}
}
