import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'password must be atleast 6 character' })
  password: string;

  @IsOptional()
  @IsNotEmpty()
  role: string;
}
