import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher) private teacherRepo: Repository<Teacher>,
  ) {}

  async create(createTeacherDto: CreateTeacherDto) {
    const teacher = this.teacherRepo.create({ name: createTeacherDto.name });
    const result = await this.teacherRepo.save(teacher);
    return result;
  }

  findAll() {
    return this.teacherRepo.find({});
  }

  findOne(id: number) {
    return this.teacherRepo.findOne({ id });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return this.teacherRepo.save({ id, ...updateTeacherDto });
  }

  remove(id: number) {
    return this.teacherRepo.delete({ id });
  }
}
