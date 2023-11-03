import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoModule } from './curso/curso.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      port: 5432,
      password: 'puchi123',
      database: 'EduSkill',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true

    }),
    CursoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
