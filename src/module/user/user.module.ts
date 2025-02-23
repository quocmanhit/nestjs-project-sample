import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../infrastructure/persistence/user/user.entity';
import { UserController } from 'src/presentation/user.controller';
import { CreateUserUseCase } from '../../application/use-cases/user/create-user.use-case';
import { UserService } from '../../domain/user/user.service';
import { UserRepositoryImpl } from '../../infrastructure/persistence/user/user.repository.impl';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])], // Import Entity vào TypeORM
  controllers: [UserController], // Đăng ký Controller
  providers: [CreateUserUseCase, UserService, UserRepositoryImpl], // Đăng ký Use-Case, Service, Repository
  exports: [CreateUserUseCase, UserService], // Export để module khác có thể sử dụng
})
export class UserModule {}
