// examenes-complementarios.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Consulta } from '../consulta/consulta.entity';

@Entity()
export class ExamenesComplementarios {
  @PrimaryGeneratedColumn()
  ID_ExamenComplementario: number;

  @Column()
  ID_Consulta: number;

  @Column({ length: 120 })
  Tipo_Examen: string;

  @Column('text')
  Resultados: string;

  @ManyToOne(() => Consulta, (consulta) => consulta.examenesComplementarios, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ID_Consulta' })
  consulta: Consulta;
}
