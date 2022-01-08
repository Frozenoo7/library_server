import { IsNotEmpty, IsString } from 'class-validator';

export class FacultyDto {
  @IsString()
  @IsNotEmpty()
  faculty: string;
}
