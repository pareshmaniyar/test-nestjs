import { Period } from 'src/period/entities/period.entity';
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
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Student, (student: Student) => student.classId)
  students: Student[];

  @OneToMany(() => Period, (period: Period) => period.classId)
  periods: Period[];
}
