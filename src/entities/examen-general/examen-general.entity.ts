// examen-general.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Consulta } from '../consulta/consulta.entity';

@Entity()
export class ExamenGeneral {
  @PrimaryGeneratedColumn()
  ID_ExamenGeneral: number;

  @Column()
  FrecuenciaCardiaca: number;

  @Column()
  FrecuenciaRespiratoria: number;

  @Column()
  Temperatura: number;

  @Column()
  PresionArterial: string;

  @Column()
  Talla: number;

  @Column()
  Peso: number;

  
  // Cambia esta línea de código para reflejar el nombre de la columna
  @Column({ name: 'ID_Consulta' })
  ID_Consulta: number;

  @ManyToOne(() => Consulta, consulta => consulta.examenesGenerales , { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ID_Consulta' })
  consulta: Consulta;
}
