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

@Module({
	imports: [ DBModule ],
	controllers: [ AppController, UserController, CountryController ],
	providers: [ ...Providers, AppService, UserService, UserAdapter, CountryService ]
})
export class AppModule {}
