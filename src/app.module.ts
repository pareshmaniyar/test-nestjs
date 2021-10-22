import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TodosModule } from './todos/todos.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import config from './ormconfig';

@Module({
  imports: [
    UserModule,
    TodosModule,
    ProductsModule,
    TypeOrmModule.forRoot(config),
    StudentsModule,
    TeachersModule,
    StudentModule,
    TeacherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
