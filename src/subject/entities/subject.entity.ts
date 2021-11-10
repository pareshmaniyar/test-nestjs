import { ObjectType, Int, Field } from '@nestjs/graphql';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Subject {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToMany(() => Teacher, (teacher: Teacher) => teacher.subjects)
  teachers: Teacher[];
}
