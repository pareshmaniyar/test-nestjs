import { Student } from 'src/student/entities/student.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContactInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  entityId: string;

  @Column()
  name: string;

  @Column()
  dob: Date;

  @Column()
  address: string;

  @Column()
  pincode: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;
}
