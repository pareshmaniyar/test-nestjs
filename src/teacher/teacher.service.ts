import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher) private teacherRepo: Repository<Teacher>,
    @InjectRepository(Subject) private subjectRepo: Repository<Subject>,
    @InjectRepository(ContactInfo)
    private contactInfoRepo: Repository<ContactInfo>
  ) {}

  async create(createTeacherDto: CreateTeacherDto) {
    const teacher = this.teacherRepo.create({
      name: createTeacherDto.name
    });
    const result = await this.teacherRepo.save(teacher);
    return result;
  }

  findAll() {
    return this.teacherRepo.find({
      relations: ['subjects', 'contactInfo']
    });
  }

  findOne(id: number) {
    return this.teacherRepo.findOne(id, {
      relations: ['subjects', 'periods', 'headOfClassroom', 'contactInfo']
    });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const teacher = await this.teacherRepo.findOne(id);
    for (const [key, value] of Object.entries(updateTeacherDto)) {
      teacher[key] = value;
    }
    if (updateTeacherDto.hasOwnProperty('subject')) {
      const subjectId = updateTeacherDto.subject;
      delete teacher['subject'];
      const subject = await this.subjectRepo.findOne(subjectId);
      if (subject) {
        if (!teacher.subjects) {
          teacher.subjects = [];
        }
        teacher.subjects.push(subject);
      } else {
        return 'subject not found';
      }
    }
    if (updateTeacherDto.hasOwnProperty('contactInfo')) {
      const contactInfoId = updateTeacherDto.contactInfo;
      delete teacher['contactInfo'];
      const info = await this.contactInfoRepo.findOne(contactInfoId);
      if (info) {
        teacher.contactInfo = info;
      } else {
        return 'subject not found';
      }
    }
    await this.teacherRepo.save(teacher);
    return teacher;
  }

  remove(id: number) {
    return this.teacherRepo.delete({ id });
  }
}
