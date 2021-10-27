import { Classroom } from 'src/classroom/entities/classroom.entity';
import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Classroom, (classroom: Classroom) => classroom.id, {
    onDelete: 'SET NULL',
  })
  classId: Classroom | number | null;

  @Column({ default: null })
  contactInfo: number;

  @Column({ default: null })
  rollNumber: number;
}
