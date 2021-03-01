import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { from, Observable, of } from 'rxjs';
import { User } from 'src/user/models/user.interface';
import { UserService } from 'src/user/service/user.service';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService
    // private readonly userService: UserService
  ) {}

  generateJWT(user: User): Observable <string> {
    return from(this.jwtService.signAsync({user}));
  }

  hashPassword(password: string): Observable <string> {
    // hash('password', 지정된 라운드 수로 Salt가 생성(난수))
    return from<string>(bcrypt.hash(password, 12));
  }

  comparePasswords(newPassword: string, passwordHash: string): Observable <any | boolean> {
    return of<any | boolean>(bcrypt.compare(newPassword, passwordHash));
  }
}
