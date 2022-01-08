import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async saveUser(body: UserDto): Promise<User> {
    try {
      console.log(body);
      const user = await this.userRepository.findOne({
        where: { email: body.email },
      });
      if (user) throw new Error('user already exist');
      const newUser = this.userRepository.create(body);
      return await this.userRepository.save(newUser);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async findById(id: string): Promise<User> {
    try {
      return await this.userRepository.findOne(id);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async findUserByEmail(email: string): Promise<User> {
    try {
      return await this.userRepository.findOne({ where: { email } });
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
