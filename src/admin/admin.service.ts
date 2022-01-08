import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GradeDto } from './dto/grade.dto';
import { Faculty } from './entity/faculty.entity';
import { Grade } from './entity/grade.entity';
import { FacultyDto } from './dto/faculty.dto';
import { BooksDto, UpdateBooksDto } from './dto/books.dto';
import { Books } from './entity/books.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Grade)
    private readonly gradeRepository: Repository<Grade>,

    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,

    @InjectRepository(Books)
    private readonly booksRepository: Repository<Books>,
  ) {}

  async createGrade(body: GradeDto): Promise<Grade> {
    try {
      const newGrade = await this.gradeRepository.create(body);
      return await this.gradeRepository.save(newGrade);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async findOneGrade(id: string): Promise<Grade> {
    try {
      return await this.gradeRepository.findOne(id);
    } catch (err) {
      throw new InternalServerErrorException(err.messsage);
    }
  }

  async createFaculty(body: FacultyDto): Promise<Faculty> {
    try {
      const newFaculty = await this.facultyRepository.create(body);
      return await this.facultyRepository.save(newFaculty);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async findOneFaculty(id: string): Promise<Faculty> {
    try {
      return await this.facultyRepository.findOne(id);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async createBooks(body: BooksDto): Promise<Books> {
    try {
      const book = await this.booksRepository.findOne({
        where: { name: body.name },
      });
      if (book) throw new Error('book name already exist');
      const grade = await this.findOneGrade(body.grade);
      if (!grade) throw new Error('grade not found');
      const faculty = await this.findOneFaculty(body.faculty);
      if (!faculty) throw new Error('faculty not found');
      const newBook = await this.booksRepository.create({
        ...body,
        grade: grade,
        faculty: faculty,
      });
      return await this.booksRepository.save(newBook);
    } catch (err) {
      console.log(err.message);
      throw new InternalServerErrorException(err.message);
    }
  }

  async findById(id: string): Promise<Books> {
    try {
      console.log(id);
      return await this.booksRepository.findOne(id);
    } catch (err) {
      console.log(err.message);
      throw new InternalServerErrorException(err.message);
    }
  }

  async findByName(name: string): Promise<Books> {
    try {
      return await this.booksRepository.findOne({ name });
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
  async updateOneBook(body: UpdateBooksDto): Promise<Books> {
    try {
      const oldBook = await this.findById(body.id);
      if (!oldBook) throw new Error('book not found');
      console.log(oldBook);
      // return { ...oldBook, ...body };
      return await this.booksRepository.save({ ...oldBook, ...body });
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async deleteBook(id: string): Promise<any> {
    try {
      return await this.booksRepository.delete(id);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
