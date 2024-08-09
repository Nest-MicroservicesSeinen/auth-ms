import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { envs } from 'src/config';

async function bootstrap() {

  const logger = new Logger('Main');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,{
      transport: Transport.NATS,
      options: {
        servers:  envs.natsServers ,
      }
    });


  await app.listen();
  logger.log(`Auth Microservice running on port: ${envs.port}`);
}
bootstrap();
