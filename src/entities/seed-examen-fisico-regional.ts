// examen-fisico-regional.seed.ts
import { Connection, createConnection } from 'typeorm';
import { Consulta } from './consulta/consulta.entity';
import { ExamenFisicoRegional } from './examen-fisico-regional/examen-fisico-regional.entity';

const seedExamenFisicoRegional = async () => {
  const connection: Connection = await createConnection();

  try {
    const consultas = await connection.getRepository(Consulta).find();

    for (const consulta of consultas) {
      const examenFisicoRegionalData = {
        ID_Consulta: consulta.ID_Consulta,
        Observaciones: 'Observaciones de la consulta ' + consulta.ID_Consulta,
        // Otros campos según necesidades...
      };

      const examenFisicoRegional = new ExamenFisicoRegional();
      Object.assign(examenFisicoRegional, examenFisicoRegionalData);

      await connection.getRepository(ExamenFisicoRegional).save(examenFisicoRegional);
    }

    console.log('Seed de ExamenFisicoRegional ejecutada con éxito');
  } catch (error) {
    console.error('Error al ejecutar la seed de ExamenFisicoRegional:', error);
  } finally {
    await connection.close();
  }
};

seedExamenFisicoRegional();
