import { Connection, createConnection } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';

export const DBProvider = [
	{
		provide: 'dbConnection',
		useFactory: async () => {
			await createConnection({
				type: 'postgres',
				url: 'postgres://postgres:one2three4five@localhost:5433/vDoc',
				entities: [ UserEntity ],
				synchronize: true,
				logging: false
			});
		}
	}
];
