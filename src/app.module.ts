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
    ClassroomModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
