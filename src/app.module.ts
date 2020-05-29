import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBModule } from './db/db.module';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { Providers } from './providers/providers';
import { UserAdapter } from './adapters/user.adapter';
import { CountryService } from './services/country.service';
import { CountryController } from './controllers/country.controller';
import { PatientService } from './services/patient.service';
import { PatientController } from './controllers/patient.controller';
import { DoctorController } from './controllers/doctor.controller';
import { DoctorService } from './services/doctor.service';

@Module({
	imports: [ DBModule ],
	controllers: [ AppController, UserController, CountryController, PatientController, DoctorController ],
	providers: [ ...Providers, AppService, UserService, UserAdapter, CountryService, PatientService, DoctorService ]
})
export class AppModule {}
