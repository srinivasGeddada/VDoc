import { Connection, createConnection } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { RolesEntity } from 'src/entities/roles.entity';

import "dotenv/config"

export const DBProvider = [
	{
		provide: 'dbConnection',
		useFactory: async () => {
			await createConnection({
				type: 'postgres',
				url: process.env.URL,
				entities: [ UserEntity,RolesEntity ],
				synchronize: true,
				logging: false
			});
		}
	}
];
