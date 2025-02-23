import { User } from '../../../domain/user/user.entity';
import { Injectable } from '@nestjs/common';
import { UserService } from '../../../domain/user/user.service';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(createUserDTO: CreateUserDto): Promise<User> {
    const existingUser = await this.userService.findByEmail(
      createUserDTO.email,
    );
    if (existingUser) {
      throw new Error('Email already exists');
    }

    return this.userService.registerUser({
      email: createUserDTO.email,
      password: createUserDTO.password,
      firstName: createUserDTO.firstName,
      lastName: createUserDTO.lastName,
      phone: createUserDTO.phone,
      status: createUserDTO.status,
    });
  }
}
