import { UserRepository } from '../../../application/interfaces/user/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { User } from '../../../domain/user/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async getUserById(userId: number): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    return user
      ? new User(
          user.id,
          user.email,
          user.firstName,
          user.lastName,
          user.password,
          user.phone,
          user.status,
        )
      : null;
  }
  async findUserByEmail(userEmail: string): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { email: userEmail },
    });
    return user
      ? new User(
          user.id,
          user.email,
          user.firstName,
          user.lastName,
          user.password,
          user.phone,
          user.status,
        )
      : null;
  }
  async createUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  deleteUser(userId: string): Promise<any> {
    return Promise.resolve(undefined);
  }

  updateUser(user: any): Promise<any> {
    return Promise.resolve(undefined);
  }
}
