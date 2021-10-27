import { Classroom } from 'src/classroom/entities/classroom.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Period {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 123 })
  startTime: number; //timestamp

  @Column({ default: 40 })
  duration: number;

  @ManyToOne(() => Classroom, (classroom) => classroom.id, {
    onDelete: 'CASCADE',
  })
  classId: Classroom | number | null;

  @Column({ default: '' })
  teacherId: string;

  @Column({ default: '' })
  subjectId: string;
}
