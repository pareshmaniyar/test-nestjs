import { PartialType } from '@nestjs/swagger';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  id: number;
  name?: string;
  classId?: number;
  contactInfo?: number;
  rollNumber?: number;
}
