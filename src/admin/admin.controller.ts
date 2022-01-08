import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { GradeDto } from './dto/grade.dto';
import { FacultyDto } from './dto/faculty.dto';
import { BooksDto, UpdateBooksDto } from './dto/books.dto';

@Controller('admin/faculty')
export class AdminController {
  constructor(private adminService: AdminService) {}
  @Post()
  async createFaculty(@Body() body: FacultyDto): Promise<any> {
    return await this.adminService.createFaculty(body);
  }
}

@Controller('admin/grade')
export class AdminGradeController {
  constructor(private adminService: AdminService) {}
  @Post()
  async createGrade(@Body() body: GradeDto): Promise<any> {
    return await this.adminService.createGrade(body);
  }
}

@Controller('admin/books')
export class AdminBooksController {
  constructor(private adminService: AdminService) {}
  @Post()
  async createBooks(@Body() body: BooksDto): Promise<any> {
    return await this.adminService.createBooks(body);
  }

  @Get(':bid')
  async findOne(@Param('bid') id: string): Promise<any> {
    return await this.adminService.findById(id);
  }

  @Put()
  async updateOneBook(@Body() body: UpdateBooksDto): Promise<any> {
    return await this.adminService.updateOneBook(body);
  }
  @Delete(':id')
  async deleteBooks(@Param() id: string): Promise<any> {
    return this.adminService.deleteBook(id);
  }
}

// @Controller('admin')
// export class AdminController {
//   constructor(private adminService: AdminService) {}
//   @Post('grade')
//   async createGrade(@Body() body: GradeDto): Promise<any> {
//     return await this.adminService.createGrade(body);
//   }
//   @Post('faculty')
//   async createFaculty(@Body() body: FacultyDto): Promise<any> {
//     return await this.adminService.createFaculty(body);
//   }
//   @Post('books')
//   async createBooks(@Body() body: BooksDto): Promise<any> {
//     return await this.adminService.createBooks(body);
//   }
//   @Put('books')
//   async updateOneBook(@Body() body: UpdateBooksDto): Promise<any> {
//     return await this.adminService.updateOneBook(body);
//   }
//   @Delete('books')
//   async deleteBooks(id: string): Promise<any> {
//     return this.adminService.deleteBook(id);
//   }
// }
// }
