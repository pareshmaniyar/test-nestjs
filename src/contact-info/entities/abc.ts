import { Student } from 'src/student/entities/student.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContactInfo {
  @OneToOne(() => Student || Teacher, (user) => user.contactInfo, {
    onDelete: 'CASCADE',
  })
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
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
