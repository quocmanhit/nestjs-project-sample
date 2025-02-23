import { CreateUserUseCase } from '../application/use-cases/user/create-user.use-case';
import { User } from '../domain/user/user.entity';
import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../application/dto/create-user.dto';
import { BaseResponse } from '../application/dto/response/base-response.dto';
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly createUserUC: CreateUserUseCase) {}

  // @Get()
  // @ApiOperation({ summary: 'Get user by id' })
  // @ApiResponse({ status: 200, description: 'User found' })
  // @ApiResponse({ status: 404, description: 'User not found' })
  // async getUserById(userId: number): Promise<User | null> {
  //   return this.userUC.getUserById(userId);
  // }
  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: HttpStatus.CONFLICT, description: 'User created' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<BaseResponse<User>> {
    const user = await this.createUserUC.execute(createUserDto);
    return new BaseResponse<User>(true, 'User registered successfully', user);
  }
}
