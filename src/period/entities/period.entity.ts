import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Period {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startTime: Date;

  @Column()
  duration: string;

  @Column()
  classId: string;

  @Column()
  teacherId: string;

  @Column()
  subjectId: string;
}
