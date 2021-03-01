import { Result } from 'src/result/models/result.interface';

export class User {
  id: number;
  email?: string;
  password?: string;
  username?: string;
  results?: Result[];
}