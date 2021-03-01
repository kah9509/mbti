import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from 'src/user/service/user.service';
import { Result } from '../models/result.interface';
import { ResultService } from '../service/result.service';

@Controller('result')
export class ResultController {
  constructor(
    // private readonly userService: UserService,
    private readonly resultService: ResultService
  ) {}

  @Post()
  create(@Body()result: Result): Observable<Result> {
    return this.resultService.create(result.tester, result);
  }

  // 유저의 결과리스트 가져오기
  @Get(':id')
  findByTester(@Param() params): Observable<Result[]> {
    return this.resultService.findByTester(params.id);
  }
}
