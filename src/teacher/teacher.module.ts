import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { Teacher } from './entities/teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from 'src/subject/entities/subject.entity';
import { SubjectService } from 'src/subject/subject.service';
import { SubjectController } from 'src/subject/subject.controller';
import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
import { ContactInfoController } from 'src/contact-info/contact-info.controller';
import { ContactInfoService } from 'src/contact-info/contact-info.service';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher, Subject, ContactInfo])],
  controllers: [TeacherController, SubjectController, ContactInfoController],
  providers: [TeacherService, SubjectService, ContactInfoService],
  exports: [TeacherService]
})
export class TeacherModule {}
