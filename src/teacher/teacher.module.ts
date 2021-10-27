import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { Teacher } from './entities/teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from 'src/subject/entities/subject.entity';
import { SubjectService } from 'src/subject/subject.service';
import { SubjectController } from 'src/subject/subject.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher, Subject])],
  controllers: [TeacherController, SubjectController],
  providers: [TeacherService, SubjectService],
})
export class TeacherModule {}
