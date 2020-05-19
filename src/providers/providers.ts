import { Connection, getRepository, Repository } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';

export const Providers = [
	{
		provide: 'UserRepository',
		useFactory: (connection: Connection) => getRepository(UserEntity),
		inject: [ 'dbConnection' ]
	}
];
