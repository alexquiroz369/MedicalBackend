import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './controllers/test/test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/pacientes/paciente.entity';
import { PacienteModule } from './modules/paciente.module';
import { Consulta } from './entities/consulta/consulta.entity';
import { AntecedentesPersonales } from './entities/antecedentes/antecedentes-personales.entity';
import { ConsultaModule } from './modules/consulta.module';
import { ExamenGeneral } from './entities/examen-general/examen-general.entity';
import { ExamenFisicoRegional } from './entities/examen-fisico-regional/examen-fisico-regional.entity';
import { ExamenGeneralModule } from './modules/examen-general.module';
import { ExamenFisicoRegionalModule } from './modules/examen-fisico-regional.module';
import { ExamenesComplementarios } from './entities/examenes-complementarios/examenes-complementarios.entity';
import { ExamenesComplementariosModule } from './modules/examenes-complementarios.module';
import { DiagnosticoTratamiento } from './entities/diagnostico-tratamiento/diagnostico-tratamiento.entity';
import { DiagnosticoTratamientoModule } from './modules/diagnostico-tratamiento.module';
import { AllDataController } from './proc_alm/all-data-pacient.controller';
import { AllDataService } from './proc_alm/all-data-pacient.service';
import { LastDataController } from './proc_alm/last-data-pacient.controller';
import { LastDataService } from './proc_alm/last-data-pacient.service';
import { AllConsultController } from './proc_alm/all-consultation-pacient.controller';
import { AllConsultService } from './proc_alm/all-consultation-pacient.service';


import { PacientesEnEsperaModule } from './modules/pacientesEnEsperaModule.module';
import { PacienteEnEspera } from './entities/pacienteEnEspera/pacienteEspera.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Paciente, Consulta, AntecedentesPersonales, ExamenGeneral, 
          ExamenFisicoRegional, ExamenesComplementarios, DiagnosticoTratamiento, PacienteEnEspera],
        synchronize: true,
      }),
    }), ConfigModule.forRoot(), PacienteModule, AntecedentesPersonales, ConsultaModule, 
    ExamenGeneralModule, ExamenFisicoRegionalModule, ExamenesComplementariosModule, DiagnosticoTratamientoModule, PacientesEnEsperaModule
  ],
  controllers: [AppController, UsuarioController, AllDataController, LastDataController, AllConsultController],
  providers: [AppService, AllDataService, LastDataService, AllConsultService],
})

export class AppModule {}