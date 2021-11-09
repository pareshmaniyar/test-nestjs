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
import config from '../ormconfig';
import { join } from 'path/posix';
import { GraphQLModule } from '@nestjs/graphql';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    TodosModule,
    StudentModule,
    TeacherModule,
    PeriodModule,
    ContactInfoModule,
    SubjectModule,
    ClassroomModule,
    PetModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
