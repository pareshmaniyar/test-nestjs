import { Student } from 'src/student/entities/student.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ContactInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Teacher, (teacher) => teacher.id, {
    onDelete: 'CASCADE'
  })
  entityId: Teacher | number;

  @Column()
  name: string;

  @Column()
  dob: string;

  @Column()
  address: string;

  @Column()
  pincode: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;
}
