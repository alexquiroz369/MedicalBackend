// seed-examenes-complementarios.ts
import { Connection, createConnection } from 'typeorm';
import { ExamenesComplementarios } from './examenes-complementarios/examenes-complementarios.entity'; // Ajusta la ruta según tu estructura de proyecto
import { Consulta } from './consulta/consulta.entity'; // Ajusta la ruta según tu estructura de proyecto

const seedExamenesComplementarios = async () => {
    const connection: Connection = await createConnection();

  // Encuentra todas las consultas existentes
  const consultas = await connection.getRepository(Consulta).find();

  // Asegúrate de que hay al menos una consulta existente antes de continuar
  if (consultas.length === 0) {
    console.error('No hay consultas existentes. Crea consultas antes de ejecutar esta seed.');
    return;
  }

  // Selecciona una consulta existente (puedes ajustar esta lógica según tus necesidades)
  const consulta = consultas[0];

  // Seed de ExamenesComplementarios
  const examenesComplementariosData = [
    {
      ID_Consulta: consulta.ID_Consulta,
      Tipo_Examen: 'Tipo de Examen 1',
      Resultados: 'Resultados del Examen 1',
    },
    {
      ID_Consulta: consulta.ID_Consulta,
      Tipo_Examen: 'Tipo de Examen 2',
      Resultados: 'Resultados del Examen 2',
    },
    // Agrega más datos según sea necesario
  ];

  await connection.getRepository(ExamenesComplementarios).save(examenesComplementariosData);
};

seedExamenesComplementarios();
