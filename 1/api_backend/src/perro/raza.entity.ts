import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Perro } from './perro.entity';

@Entity()
export class Raza {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  nombre: string;

  @Column({ length: 45, nullable: true })
  origen: string;

  @Column({ length: 45, nullable: true })
  historia: string;

  @Column({ length: 45, nullable: true })
  imagen_representativa: string;

  @OneToMany(() => Perro, perro => perro.raza)
  perros: Perro[];


}
