import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column('varchar', { length: 14, unique: true })
  cpf: string;

  @Column('varchar', { default: 'NÃO INFORMADO' })
  phoneNumber: string;

  @Column('varchar', { array: true })
  habilities: string[];

  @Column({ default: 0 })
  isValidated: number;
}
