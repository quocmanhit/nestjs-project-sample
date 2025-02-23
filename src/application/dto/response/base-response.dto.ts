import { ApiProperty } from '@nestjs/swagger';

export class BaseResponse<T> {
  @ApiProperty({ example: true, description: 'Request success status' })
  success: boolean;

  @ApiProperty({ description: 'Response message' })
  message: string;

  @ApiProperty({ description: 'Response data', nullable: true })
  data?: T;

  constructor(success: boolean, message: string, data?: T) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}
