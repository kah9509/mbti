import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert } from 'typeorm';

import { ResultEntity } from '../../result/models/result.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn() //자동으로 증가하는 Primary key column
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }
  
  @OneToMany(type => ResultEntity, result => result.tester)
  results: ResultEntity[];
}