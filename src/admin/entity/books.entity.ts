import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Faculty } from './faculty.entity';
import { Grade } from './grade.entity';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  details: string;

  @ManyToOne(() => Grade, (grade) => grade.id)
  grade: Grade;

  @ManyToOne(() => Faculty, (faculty) => faculty.id)
  faculty: Faculty;

  @Column()
  publication: string;

  @Column()
  quantity: string;
}
