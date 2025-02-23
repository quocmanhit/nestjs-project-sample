import { User } from '../../../domain/user/user.entity';

export interface UserRepository {
  getUserById(userId: number): Promise<User | null>;
  findUserByEmail(email: string): Promise<User | null>;
  createUser(user: any): Promise<User>;
  updateUser(user: any): Promise<any>;
  deleteUser(userId: string): Promise<any>;
}
