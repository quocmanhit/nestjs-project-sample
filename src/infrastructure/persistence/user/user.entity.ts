import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//import bcrypt
import * as bcrypt from 'bcrypt';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column({ unique: true })
  email: string;
  @Column({ select: false })
  password: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  phone: string;
  @Column({ default: 1 })
  status: number; //1: active, 0: inactive

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
