import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './controllers/test/test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/pacientes/paciente.entity';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
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
import { ServiceGateway } from './gateways/events.gateway';
import { DinamicController } from './socketEndpoint/dinamic.controller';
import { ServiceDinamic } from './socketEndpoint/dinamic.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'medicaldatabase',
      entities: [Paciente, Consulta, AntecedentesPersonales, ExamenGeneral, 
        ExamenFisicoRegional, ExamenesComplementarios, DiagnosticoTratamiento],
      synchronize: true,
    }), PacienteModule, AntecedentesPersonales, ConsultaModule, 
    ExamenGeneralModule, ExamenFisicoRegionalModule, ExamenesComplementariosModule, DiagnosticoTratamientoModule,
  ],
  controllers: [AppController, UsuarioController, AllDataController, LastDataController, AllConsultController],
  providers: [AppService, AllDataService, LastDataService, AllConsultService, ServiceGateway],
})

export class AppModule {}