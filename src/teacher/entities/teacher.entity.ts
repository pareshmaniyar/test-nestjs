import { Subject } from 'src/subject/entities/subject.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
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

  @Column({ default: null })
  contactInfo: string;

  @ManyToMany(() => Subject, (subject: Subject) => subject.teachers, {
    primary: true,
  })
  @JoinTable()
  subjects: Subject[];

  addSubject(subject: Subject): void {
    if (this.subjects === null) {
      this.subjects = new Array<Subject>();
    }
    this.subjects.push(subject);
  }
}
