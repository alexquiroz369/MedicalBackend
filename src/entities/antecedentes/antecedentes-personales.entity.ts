// antecedentes-personales.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Paciente } from '../pacientes/paciente.entity'; // Ajusta la ruta según tu estructura

@Entity()
export class AntecedentesPersonales {
  @PrimaryGeneratedColumn()
  ID_Antecedente: number;

  @Column()
  Enfermedad_Previa: string;

  @Column()
  Medicamento: string;

  // Otros campos según necesidades

  @ManyToOne(() => Paciente, paciente => paciente.antecedentesPersonales)
  @JoinColumn({ name: 'pacienteId' })
  paciente: Paciente;
  
}
