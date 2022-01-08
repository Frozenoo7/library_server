import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Books } from './books.entity';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  grade: string;
}
