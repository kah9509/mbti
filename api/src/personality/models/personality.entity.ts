import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Personality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  desc: string;
}
