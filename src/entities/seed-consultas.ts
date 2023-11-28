// seed-consultas.ts
import { createConnection } from 'typeorm';
import { Consulta } from './consulta/consulta.entity';
import { Paciente } from './pacientes/paciente.entity';// Ajusta la ruta según la ubicación real de tu entidad Paciente

const consultasData = [
  { Fecha: new Date(), Motivo_Consulta: 'Examen de rutina', Nombre_Doctor: 'Dr. Smith', pacienteId: 1 },
  { Fecha: new Date(), Motivo_Consulta: 'Dolor de cabeza', Nombre_Doctor: 'Dra. Johnson', pacienteId: 2 },
  // Agrega más datos según sea necesario
];

async function seedConsultas() {
  const connection = await createConnection();

  try {
    for (const consultaData of consultasData) {
      const consulta = new Consulta();
      consulta.Fecha = consultaData.Fecha;
      consulta.Motivo_Consulta = consultaData.Motivo_Consulta;
      consulta.Nombre_Doctor = consultaData.Nombre_Doctor;

      // Obtén el paciente relacionado
      const pacienteId: number = consultaData.pacienteId;
      const paciente = await connection.getRepository(Paciente).findOne({ where: { ID_Paciente: pacienteId } });
      
      if (paciente) {
        consulta.paciente = paciente;
      }

      await connection.getRepository(Consulta).save(consulta);
    }

    console.log('Seed de consultas completado.');
  } catch (error) {
    console.error('Error en el seed de consultas:', error);
  } finally {
    await connection.close();
  }
}

seedConsultas();
