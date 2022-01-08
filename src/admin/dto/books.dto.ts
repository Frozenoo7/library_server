import { IsNotEmpty, IsString } from 'class-validator';

export class BooksDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  details: string;

  @IsString()
  @IsNotEmpty()
  grade: string;

  @IsString()
  @IsNotEmpty()
  faculty: string;

  @IsString()
  @IsNotEmpty()
  publication: string;

  @IsString()
  @IsNotEmpty()
  quantity: string;
}

export class UpdateBooksDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  details: string;

  @IsString()
  @IsNotEmpty()
  gradeId: string;

  @IsString()
  @IsNotEmpty()
  facultyId: string;

  @IsString()
  @IsNotEmpty()
  publication: string;

  @IsString()
  @IsNotEmpty()
  quantity: string;
}
