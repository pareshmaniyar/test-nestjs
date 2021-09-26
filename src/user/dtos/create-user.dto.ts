import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty()
  name: string;
  @ApiProperty({ required: false })
  age: number;
}
