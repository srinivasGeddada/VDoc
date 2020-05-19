import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	//app.setGlobalPrefix('vdoc');
	Logger.log('Server Running On Port 3000', 'Bootstrap');
	await app.listen(3000);
}
bootstrap();
