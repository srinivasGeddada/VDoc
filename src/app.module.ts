import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBModule } from './db/db.module';
import { DBProvider } from './db/db.providers';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { Providers } from './providers/providers';

@Module({
	imports: [ DBModule ],
	controllers: [ AppController, UserController ],
	providers: [ ...Providers, AppService, UserService ]
})
export class AppModule {}
