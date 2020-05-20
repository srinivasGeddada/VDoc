import { Connection, createConnection } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { RolesEntity } from 'src/entities/roles.entity';

export const DBProvider = [
	{
		provide: 'dbConnection',
		useFactory: async () => {
			await createConnection({
				type: 'postgres',
				url: 'postgres://postgres:one2three4five@localhost:5433/vDoc',
				entities: [ UserEntity,RolesEntity ],
				synchronize: true,
				logging: false
			});
		}
	}
];
