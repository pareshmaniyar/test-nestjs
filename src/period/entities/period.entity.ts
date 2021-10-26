import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

    @Column({ default: '' })
    classId: string;

    @Column({ default: '' })
    teacherId: string;

    @Column({ default: '' })
    subjectId: string;
}
