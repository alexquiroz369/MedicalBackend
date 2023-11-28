import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Consulta } from '../consulta/consulta.entity';
import { AntecedentesPersonales } from '../antecedentes/antecedentes-personales.entity';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  ID_Paciente: number;

  @Column({ length: 255 })
  Nombre: string;

  @Column({ nullable: true })
  Edad: number;

  @Column({ length: 10 })
  Sexo: string;

  @Column({ length: 255 })
  Domicilio: string;

  @Column({ unique: true, type: 'numeric'})
  Carnet: number;
  
  @OneToMany(() => Consulta, consulta => consulta.paciente)
  consultas: Consulta[];

  @OneToMany(() => AntecedentesPersonales, antecedentes => antecedentes.paciente)
  antecedentesPersonales: AntecedentesPersonales[];
}
