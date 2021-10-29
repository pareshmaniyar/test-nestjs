import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { Classroom } from './entities/classroom.entity';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(Classroom)
    private classroomRepo: Repository<Classroom>
  ) {}

  async create(createClassroomDto: CreateClassroomDto) {
    const classroom = this.classroomRepo.create({
      name: createClassroomDto.name
    });
    const result = await this.classroomRepo.save(classroom);
    return result;
  }

  findAll() {
    return this.classroomRepo.find({});
  }

  findOne(id: number) {
    return this.classroomRepo.findOne(id, {
      relations: ['students', 'periods', 'classTeacher']
    });
  }

  async update(id: number, updateClassroomDto: UpdateClassroomDto) {
    return this.classroomRepo.save({ id, ...updateClassroomDto });
  }

  remove(id: number) {
    return this.classroomRepo.delete({ id });
  }
}
