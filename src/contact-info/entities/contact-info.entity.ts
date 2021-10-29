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

  // below doesn't delete contact info?
  @OneToOne(() => Student, (entity) => entity.contactInfo, {
    onDelete: 'CASCADE'
  })
  @OneToOne(() => Teacher, (entity) => entity.contactInfo, {
    onDelete: 'CASCADE'
  })
  entityId: Teacher | Student | number;

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
