import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { UserEntity } from '../../user/models/user.entity';

@Entity()
export class ResultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: string;
  // @Column()
  // E: number;

  // @Column()
  // I: number;

  // @Column()
  // S: number;

  // @Column()
  // N: number;

  // @Column()
  // T: number;

  // @Column()
  // F: number;

  // @Column()
  // J: number;

  // @Column()
  // P: number;

  @CreateDateColumn()
  createdDate: Date;

  @ManyToOne(type => UserEntity, user => user.results)
  tester: UserEntity;
}