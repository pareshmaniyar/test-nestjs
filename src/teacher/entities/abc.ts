// import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
// import { Student } from 'src/student/entities/student.entity';
// import { Subject } from 'src/subject/entities/subject.entity';
// import {
//   Column,
//   Entity,
//   JoinColumn,
//   JoinTable,
//   ManyToMany,
//   ManyToOne,
//   OneToMany,
//   OneToOne,
//   PrimaryGeneratedColumn,
// } from 'typeorm';

// @Entity()
// export class Teacher {
//   @PrimaryGeneratedColumn()
//   id: string;

//   @Column()
//   name: string;

//   @ManyToOne(() => Teacher, (teacher) => teacher.directReports, {
//     onDelete: 'SET NULL',
//   })
//   manager: Teacher;

//   @OneToMany(() => Teacher, (teacher) => teacher.manager)
//   directReports: Teacher[];

//   @OneToOne(() => Subject, (subject) => subject.id, {
//     onDelete: 'SET NULL',
//   })
//   primarySubject: Subject;

//   @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.id, {
//     primary: true,
//   })
//   @JoinColumn()
//   contactInfo: ContactInfo;

//   @ManyToMany(() => Subject, (subject) => subject.teachers)
//   @JoinTable({ name: 'TeacherSubjects' })
//   subjects: Subject[];
// }
