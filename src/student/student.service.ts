import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepo.create({
      name: createStudentDto.name,
    });
    const result = await this.studentRepo.save(student);
    return result;
  }

  findAll() {
    return this.studentRepo.find({});
  }

  findOne(id: number) {
    return this.studentRepo.findOne({ id });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.studentRepo.save({ id, ...updateStudentDto });
  }

  remove(id: number) {
    return this.studentRepo.delete({ id });
  }
}
