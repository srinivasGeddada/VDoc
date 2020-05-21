import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
	const port = process.env.PORT;
	const app = await NestFactory.create(AppModule);
	//app.setGlobalPrefix('vdoc');
	Logger.log(`Server Running On Port ${port}`, 'Bootstrap');
	await app.listen(port);
}
bootstrap();
