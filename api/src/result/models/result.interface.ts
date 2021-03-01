import { User } from 'src/user/models/user.interface';

export interface Result {
  id?: number;
  score?: string;
  // E?: number;
  // I?: number;
  // S?: number;
  // N?: number;
  // T?: number;
  // F?: number;
  // J?: number;
  // P?: number;
  createDate?: Date;
  tester?: User;
}
