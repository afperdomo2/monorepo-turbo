import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Configura para que todas las rutas del backend
   * inicien con '/api'
   */
  app.setGlobalPrefix('/api');

  await app.listen(3000);
}
bootstrap();
