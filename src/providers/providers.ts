import { Connection, getRepository, Repository } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { RolesEntity } from 'src/entities/roles.entity';
import { MedicineMasterEntity } from 'src/entities/medicineMaster.entity';
import { PerceptionEntity } from 'src/entities/preception.entity';
import { CityEntity } from 'src/entities/city.entity';
import { StateEntity } from 'src/entities/state.entity';
import { CountryEntity } from 'src/entities/country.entity';
import { PatientEntity } from 'src/entities/patient.entity';
import { DoctorEntity } from 'src/entities/doctor.entity';

export const Providers = [
	{
		provide: 'UserRepository',
		useFactory: (connection: Connection) => getRepository(UserEntity),
		inject: [ 'dbConnection' ]
	},
	{
		provide: 'RolesRepository',
		useFactory: (connection: Connection) => getRepository(RolesEntity),
		inject: [ 'dbConnection' ]
	},
	{
		provide: 'MedicineMasterRepository',
		useFactory: (connection: Connection) => getRepository(MedicineMasterEntity),
		inject: [ 'dbConnection' ]
	},
	{
		provide: 'PerceptionRepository',
		useFactory: (connection: Connection) => getRepository(PerceptionEntity),
		inject: [ 'dbConnection' ]
	},
	{
		provide: 'CountryRepository',
		useFactory: (connection: Connection) => getRepository(CountryEntity),
		inject: [ 'dbConnection' ]
	},
	{
		provide: 'StateRepository',
		useFactory: (connection: Connection) => getRepository(StateEntity),
		inject: [ 'dbConnection' ]
	},
	{
		provide: 'CityRepository',
		useFactory: (connection: Connection) => getRepository(CityEntity),
		inject: [ 'dbConnection' ]
	},
	{
		provide: 'PatientRepository',
		useFactory: (connection: Connection) => getRepository(PatientEntity),
		inject: [ 'dbConnection' ]
	},
	{
		provide: 'DoctorRepository',
		useFactory: (connection: Connection) => getRepository(DoctorEntity),
		inject: [ 'dbConnection' ]
	}
];
