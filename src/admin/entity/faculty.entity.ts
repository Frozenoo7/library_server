import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Books } from './books.entity';

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  faculty: string;
}
