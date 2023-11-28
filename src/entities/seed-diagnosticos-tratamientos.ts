// seed-diagnosticos-tratamientos.ts
import { Connection, createConnection } from 'typeorm';
import { DiagnosticoTratamiento } from './diagnostico-tratamiento/diagnostico-tratamiento.entity';
import { Consulta } from './consulta/consulta.entity';

const seedDiagnosticoTratamiento = async () => {
  const connection: Connection = await createConnection();

  try {

    const diagnosticosTratamientosData = [
      { Diagnostico: 'Diagnóstico 1', Tratamiento: 'Tratamiento 1' },
      { Diagnostico: 'Diagnóstico 2', Tratamiento: 'Tratamiento 2' },
      // Agrega más datos según sea necesario
    ];
    for (const data of diagnosticosTratamientosData) {
      const consultaId = 2; // Ajusta el ID de la consulta según tus necesidades
      const consulta = await connection.getRepository(Consulta).findOne({ where: { ID_Consulta: consultaId } });
      
  
      if (consulta) {
        const diagnosticoTratamiento = new DiagnosticoTratamiento();
        diagnosticoTratamiento.Diagnostico = data.Diagnostico;
        diagnosticoTratamiento.Tratamiento = data.Tratamiento;
        diagnosticoTratamiento.consulta = consulta;
  
        await connection.getRepository(DiagnosticoTratamiento).save(diagnosticoTratamiento);
      }
    }
  
    console.log('Seed de DiagnosticoTratamiento ejecutada con éxito');

  } catch (error) {
    console.error('Error al ejecutar la seed de DiagnosticoTratamiento:', error);
  } finally {
    await connection.close();
  }
};

seedDiagnosticoTratamiento();