import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponse {
  @ApiProperty({ example: false, description: 'Request success status' })
  success: boolean;

  @ApiProperty({ description: 'Error message' })
  message: string;

  @ApiProperty({ description: 'Error code', example: 400 })
  statusCode: number;

  @ApiProperty({ description: 'Details of the error', nullable: true })
  errors?: any;

  constructor(message: string, statusCode: number, errors?: any) {
    this.success = false;
    this.message = message;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}
