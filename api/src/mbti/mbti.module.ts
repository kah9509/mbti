import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MbtiController } from './controller/mbti.controller';
import { MbtiEntity } from './models/mbti.entity';
import { MbtiService } from './service/mbti.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MbtiEntity]),
  ],
  providers: [MbtiService],
  controllers: [MbtiController]
})
export class MbtiModule {}
