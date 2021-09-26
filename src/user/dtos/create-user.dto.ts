import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, MaxLength } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty()
  @IsAlpha()
  @MaxLength(15)
  name: string;
  @ApiProperty({ required: false })
  age: number;
}
