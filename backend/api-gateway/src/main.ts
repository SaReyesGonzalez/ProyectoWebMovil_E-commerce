import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Si quieres habilitar CORS (útil para frontends separados)
  app.enableCors();

  // Puerto donde escuchará tu API Gateway
  await app.listen(3000);
  console.log('API Gateway corriendo en http://localhost:3000');
}
bootstrap();
