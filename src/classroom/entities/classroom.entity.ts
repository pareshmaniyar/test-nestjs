import { Period } from 'src/period/entities/period.entity';
import { Student } from 'src/student/entities/student.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Classroom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Teacher, (teacher: Teacher) => teacher.headOfClassroom, {
    onDelete: 'SET NULL'
  })
  @JoinColumn()
  classTeacher: Teacher | number | null;

  @OneToMany(() => Student, (student: Student) => student.classId)
  students: Student[];

  @OneToMany(() => Period, (period: Period) => period.classId)
  periods: Period[];
}
