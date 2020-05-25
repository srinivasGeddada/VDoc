import { Connection, createConnection } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { RolesEntity } from 'src/entities/roles.entity';

import "dotenv/config"
import { MedicineMasterEntity } from 'src/entities/medicineMaster.entity';
import { PerceptionEntity } from 'src/entities/preception.entity';
import { CountryEntity } from 'src/entities/country.entity';
import { StateEntity } from 'src/entities/state.entity';
import { CityEntity } from 'src/entities/city.entity';
import { PatientEntity } from 'src/entities/patient.entity';
import { DoctorEntity } from 'src/entities/doctor.entity';

export const DBProvider = [
	{
		provide: 'dbConnection',
		useFactory: async () => {
			await createConnection({
				type: 'postgres',
				url: process.env.URL,
				entities: [ UserEntity,RolesEntity ,MedicineMasterEntity,PerceptionEntity,CountryEntity,StateEntity,CityEntity,PatientEntity,DoctorEntity],
				synchronize: true,
				logging: false
			});
		}
	}
];
