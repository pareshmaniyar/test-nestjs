import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class CreateTeacherDto {
  @ApiProperty()
  @MaxLength(20)
  name: string;
}
