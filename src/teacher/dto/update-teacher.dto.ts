import { PartialType } from '@nestjs/swagger';
import { CreateTeacherDto } from './create-teacher.dto';

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {
  name?: string;
  manager?: string;
  primarySubject?: string;
  contactInfo?: string;
}
