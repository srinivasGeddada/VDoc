import { Connection, getRepository, Repository } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';
import { RolesEntity } from 'src/entities/roles.entity';

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
	}
];
