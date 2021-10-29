import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
import { ContactInfoController } from 'src/contact-info/contact-info.controller';
import { ContactInfoService } from 'src/contact-info/contact-info.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student, ContactInfo])],
  controllers: [StudentController, ContactInfoController],
  providers: [StudentService, ContactInfoService],
})
export class StudentModule {}
