import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findUserByEmail(email);
    if (user && user.password === password) {
      const { password, role, createdAt, updatedAt, ...rest } = user;
      return rest;
    }
    return null;
  }
  async login(user: any) {
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
