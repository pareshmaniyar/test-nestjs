import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { PeriodModule } from './period/period.module';
import { ContactInfoModule } from './contact-info/contact-info.module';
import { SubjectModule } from './subject/subject.module';
import { ClassroomModule } from './classroom/classroom.module';
import config from './ormconfig';
import { Period } from './period/entities/period.entity';
import { Student } from './student/entities/student.entity';
import { ContactInfo } from './contact-info/entities/contact-info.entity';
import { Teacher } from './teacher/entities/teacher.entity';
import { Classroom } from './classroom/entities/classroom.entity';
import { Subject } from './subject/entities/subject.entity';

@Module({
  imports: [
    UserModule,
    TodosModule,
    TypeOrmModule.forRoot(config),
    StudentModule,
    TeacherModule,
    PeriodModule,
    ContactInfoModule,
    SubjectModule,
    ClassroomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
