// import { Classroom } from 'src/classroom/entities/classroom.entity';
// import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
// import {
//   Column,
//   Entity,
//   JoinColumn,
//   ManyToOne,
//   OneToOne,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// @Entity()
// export class Student {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @ManyToOne(() => Classroom, (classroom) => classroom.students)
//   classId: string;

//   @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.id, {
//     primary: true,
//   })
//   @JoinColumn()
//   contactInfo: ContactInfo;

//   @Column()
//   rollNumber: number;
// }
