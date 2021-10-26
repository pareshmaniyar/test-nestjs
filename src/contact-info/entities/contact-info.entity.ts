import { Student } from 'src/student/entities/student.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import {
  Column,
  Entity,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ContactInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  entityId: string;

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
