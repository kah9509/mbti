import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Personality } from '../models/personality.entity';
import { PersonalityService } from '../service/personality.service';

@Controller('personality')
export class PersonalityController {
  // constructor(
  //   private readonly personalityService: PersonalityService
  // ) {}

  // @Post()
  // create(@Body()personal: Personality): Observable<Personality> {
  //   return this.personalityService.create(personal);
  // }
  
  // @Get()

}
