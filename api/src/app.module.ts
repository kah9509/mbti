import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MbtiModule } from './mbti/mbti.module';
import { ResultModule } from './result/result.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PersonalityModule } from './personality/personality.module';
import { ConfigModule } from '@nestjs/config';
const path = require('path');
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "pam0213612",
      "database": "PROJECT",
      "entities": [path.resolve(__dirname,'**/models/*.entity{.ts,.js}')],
      "synchronize": false // 개발자 모드일때는 false 해도 됨. 배포시엔 true
    }),
    UserModule,
    MbtiModule,
    ResultModule,
    AuthModule,
    PersonalityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
