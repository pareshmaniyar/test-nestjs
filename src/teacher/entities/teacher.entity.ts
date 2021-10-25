import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
import { Student } from 'src/student/entities/student.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: null })
  manager: string;

  @Column({ default: null })
  primarySubject: string;

  @Column({ default: null })
  contactInfo: string;
}
