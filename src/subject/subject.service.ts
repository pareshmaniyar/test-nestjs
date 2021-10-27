import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject) private subjectRepo: Repository<Subject>
  ) {}

  async create(createSubjectDto: CreateSubjectDto) {
    const subject = this.subjectRepo.create({
      name: createSubjectDto.name,
    });
    const result = await this.subjectRepo.save(subject);
    return result;
  }

  findAll() {
    return this.subjectRepo.find({});
  }

  findOne(id: number) {
    return this.subjectRepo.findOne(id);
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return this.subjectRepo.save({ id, ...updateSubjectDto });
  }

  remove(id: number) {
    return this.subjectRepo.delete({ id });
  }
}
