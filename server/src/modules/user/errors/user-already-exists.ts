import { ApiProperty } from '@nestjs/swagger';

export class UserAlreadyExists {
  @ApiProperty({ example: 409 })
  statusCode: number;

  @ApiProperty({ example: 'user already exists' })
  message: string;
}
