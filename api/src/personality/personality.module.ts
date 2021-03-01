import { Module } from '@nestjs/common';
import { PersonalityService } from './service/personality.service';
import { PersonalityController } from './controller/personality.controller';

@Module({
  providers: [PersonalityService],
  controllers: [PersonalityController]
})
export class PersonalityModule {}
