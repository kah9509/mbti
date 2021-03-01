import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MbtiEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  q: string;

  @Column()
  a1: string;

  @Column()
  p1: string;

  @Column()
  a2: string;

  @Column()
  p2: string;
}