import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  // 開發中暫時開啟cors
  const app = await NestFactory.create(AppModule,{ cors: true });
  app.use(cookieParser());
 
  //swagger
  const options = new DocumentBuilder()
  .setTitle('FruitSlot API')
  .setDescription('')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(process.env.PORT);
}
bootstrap();
