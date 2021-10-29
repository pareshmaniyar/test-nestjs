import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>,
    @InjectRepository(ContactInfo)
    private contactInfoRepo: Repository<ContactInfo>
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepo.create({
      name: createStudentDto.name
    });
    const result = await this.studentRepo.save(student);
    return result;
  }

  findAll() {
    return this.studentRepo.find({ relations: ['contactInfo'] });
  }

  findOne(id: number) {
    return this.studentRepo.findOne(id, {
      relations: ['classId', 'contactInfo']
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentRepo.findOne(id);
    for (const [key, value] of Object.entries(updateStudentDto)) {
      student[key] = value;
    }
    if (updateStudentDto.hasOwnProperty('contactInfo')) {
      const contactInfoId = updateStudentDto.contactInfo;
      delete student['contactInfo'];
      const info = await this.contactInfoRepo.findOne(contactInfoId);
      if (info) {
        student.contactInfo = info;
      } else {
        return 'Contact Info not found';
      }
    }
    await this.studentRepo.save(student);
    return student;
  }

  remove(id: number) {
    return this.studentRepo.delete({ id });
  }
}
