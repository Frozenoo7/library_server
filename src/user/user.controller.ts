import {
  Body,
  Controller,
  Post,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/roles.enum';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async createUser(@Body() body: UserDto): Promise<any> {
    return await this.userService.saveUser(body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
