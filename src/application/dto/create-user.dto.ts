import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'example@gmail.com',
    description: 'Email of the user',
  })
  email: string;
  @IsString()
  @ApiProperty({
    example: 'John',
    description: 'First name of the user',
  })
  firstName: string;
  @IsString()
  @ApiProperty({
    example: 'Doe',
    description: 'Last name of the user',
  })
  lastName: string;
  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  password: string;
  @IsPhoneNumber('VN')
  @ApiProperty({
    example: '0123456789',
    description: 'Phone number of the user',
  })
  phone: string;
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Status of the user, 1 is active, 0 is inactive',
  })
  @IsNotEmpty()
  status: number;
}
