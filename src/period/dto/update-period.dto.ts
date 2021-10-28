import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { CreatePeriodDto } from './create-period.dto';

export class UpdatePeriodDto extends PartialType(CreatePeriodDto) {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  @IsInt()
  startTime?: number; //timestamp

  @ApiProperty()
  @IsInt()
  duration?: number;

  @ApiProperty()
  classId?: number;

  @ApiProperty()
  teacherId?: number;

  @ApiProperty()
  subjectId?: string;
}
