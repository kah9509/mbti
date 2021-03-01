import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/models/user.entity';
// import { UserService } from 'src/user/service/user.service';
import { ResultController } from './controller/result.controller';
import { ResultEntity } from './models/result.entity';
import { ResultService } from './service/result.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ResultEntity, UserEntity]),
  ],
  providers: [ResultService],
  controllers: [ResultController],
})
export class ResultModule {}
