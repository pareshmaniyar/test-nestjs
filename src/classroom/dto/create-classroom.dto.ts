import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class CreateClassroomDto {
  @ApiProperty()
  @MaxLength(30)
  name: string;
}
