// seed-examenes-generales.ts
import { createConnection } from 'typeorm';
import { ExamenGeneral } from './examen-general/examen-general.entity'; // Ajusta la ruta según tu estructura

async function seed() {
  const connection = await createConnection();

  const data = [
    {
      FrecuenciaCardiaca: 50,
      FrecuenciaRespiratoria: 58,
      Temperatura: 36.5,
      PresionArterial: '120/80',
      Talla: 170,
      Peso: 70,
      ID_Consulta: 1,
    },
    // Agrega más datos según sea necesario
  ];

  for (const examData of data) {
    const examenGeneral = new ExamenGeneral();
    Object.assign(examenGeneral, examData);

    // Asegúrate de asignar ID_Consulta explícitamente
    await connection.transaction(async (manager) => {
      examenGeneral.ID_Consulta = examData.ID_Consulta;
      await manager.save(examenGeneral);
    });
  }

  await connection.close();
}

seed();
