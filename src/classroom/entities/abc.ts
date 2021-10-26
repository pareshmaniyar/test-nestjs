import { Student } from 'src/student/entities/student.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Classroom {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToOne(() => Teacher, (teacher) => teacher.id, {
    primary: true,
    onDelete: 'SET NULL',
  })
  classTeacher: Teacher;

  @OneToMany(() => Student, (student) => student.classId)
  students: Student[];
}
