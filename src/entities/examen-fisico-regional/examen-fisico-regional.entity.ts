// examen-fisico-regional.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Consulta } from '../consulta/consulta.entity';

@Entity()
export class ExamenFisicoRegional {
  @PrimaryGeneratedColumn()
  ID_ExamenFisico: number;

  @Column()
  ID_Consulta: number;

  @Column({ length: 100 })
  Observaciones: string;

  @ManyToOne(() => Consulta, (consulta) => consulta.examenesFisicosRegionales)
  @JoinColumn({ name: 'ID_Consulta' })
  consulta: Consulta;
}
