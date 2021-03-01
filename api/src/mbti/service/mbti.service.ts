import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { MbtiEntity } from '../models/mbti.entity';
import { Mbti } from '../models/mbti.interface';

@Injectable()
export class MbtiService {
  constructor(
    @InjectRepository(MbtiEntity) private readonly mbtiRepository: Repository<MbtiEntity>
  ) {}

  create(mbti: Mbti): Observable<Mbti> {
    return from(this.mbtiRepository.save(mbti));
  }

  findAll(): Observable<Mbti[]> {
    return from(this.mbtiRepository.find());
  }
}
