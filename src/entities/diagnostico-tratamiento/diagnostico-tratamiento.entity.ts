// diagnostico-tratamiento.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Consulta } from '../consulta/consulta.entity'; // Ajusta la ruta según tu estructura de proyecto

@Entity()
export class DiagnosticoTratamiento {
  @PrimaryGeneratedColumn()
  ID_DiagnosticoTratamiento: number;

  @Column()
  Diagnostico: string;

  @Column()
  Tratamiento: string;

  @ManyToOne(() => Consulta, consulta => consulta.diagnosticosTratamientos, { onDelete: 'CASCADE' })
  consulta: Consulta;
  
}
