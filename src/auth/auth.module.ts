import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from './../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './jwtConstant';
import { JwtStrategy } from './jwt-strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '200s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
