import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { UserEntity } from 'src/user/models/user.entity';
import { User } from 'src/user/models/user.interface';
import { Repository } from 'typeorm';
import { ResultEntity } from '../models/result.entity';
import { Result } from '../models/result.interface';

@Injectable()
export class ResultService {

  constructor(
    @InjectRepository(ResultEntity) private resultRespository: Repository<ResultEntity>
  ) {}

  create(user: User, result: Result): Observable<Result> {
    console.log(`user: ${user}, result: ${result.id}, ${result.score}`);
    result.tester = user;
    return from(this.resultRespository.save(result));  
  }

  findByTester(tester: UserEntity): Observable<Result[]> {
    return from(this.resultRespository.find({
      where: {
        tester: tester,
      },
      order: {
        createdDate: "DESC",
      },
    }));
  }
}
