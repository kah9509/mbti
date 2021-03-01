import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Mbti } from '../models/mbti.interface';
import { MbtiService } from '../service/mbti.service';

@Controller('mbti')
export class MbtiController {
  constructor(
    private readonly mbtiService: MbtiService
  ) {}
  
  @Post()
  create(@Body()mbti: Mbti): Observable<Mbti> {
    return this.mbtiService.create(mbti);
  }

  @Get()
  findAll(): Observable<Mbti[]> {
    return this.mbtiService.findAll();
  }
}
