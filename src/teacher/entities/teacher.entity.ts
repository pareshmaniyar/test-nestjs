import { Classroom } from 'src/classroom/entities/classroom.entity';
import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
import { Period } from 'src/period/entities/period.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

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

  @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.entityId, {
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  contactInfo: ContactInfo | number | null;

  @ManyToMany(() => Subject, (subject: Subject) => subject.teachers, {
    primary: true
  })
  @JoinTable()
  subjects: Subject[];

  @OneToMany(() => Period, (period: Period) => period.teacherId)
  periods: Period[];

  @OneToOne(() => Classroom, (classroom: Classroom) => classroom.classTeacher, {
    onDelete: 'SET NULL'
  })
  headOfClassroom: Classroom | number | null;
}
