import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Perro } from './perro/perro.entity';
import { PerroService } from './perro/perro.service';
import { PerroController } from './perro/perro.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || '192.241.144.86',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'dogs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Sincroniza el esquema de la base de datos con las entidades
    }),
    TypeOrmModule.forFeature([Perro]),    
  ],
  controllers: [
    AppController,
    PerroController
  ],
  providers: [AppService, PerroService],
})
export class AppModule {}
