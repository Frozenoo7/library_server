import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import {
  AdminBooksController,
  AdminController,
  AdminGradeController,
} from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade } from './entity/grade.entity';
import { Faculty } from './entity/faculty.entity';
import { Books } from './entity/books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grade, Faculty, Books])],
  providers: [AdminService],
  controllers: [AdminController, AdminGradeController, AdminBooksController],
})
export class AdminModule {}
