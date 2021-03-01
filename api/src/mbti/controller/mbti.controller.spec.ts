import { Test, TestingModule } from '@nestjs/testing';
import { MbtiController } from './mbti.controller';

describe('MbtiController', () => {
  let controller: MbtiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MbtiController],
    }).compile();

    controller = module.get<MbtiController>(MbtiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
