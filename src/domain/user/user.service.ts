import { UserRepository } from '../../application/interfaces/user/user.repository';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { User } from './user.entity';
import { ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async registerUser(dto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findUserByEmail(dto.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const newUser = await this.userRepository.createUser(
      new User(
        0, //Id
        dto.email,
        dto.firstName,
        dto.lastName,
        hashedPassword,
        dto.phone,
        dto.status,
      ),
    );

    return newUser;
  }
  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findUserByEmail(email);
  }
}
