import { Teacher } from "src/teacher/entities/teacher.entity";
import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from "typeorm";

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
