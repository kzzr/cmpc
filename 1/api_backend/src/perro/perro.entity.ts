import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Raza } from './raza.entity';

@Entity()
export class Perro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  nombre: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ length: 45, nullable: true })
  tamano: string;

  @Column({ length: 45, nullable: true })
  peso: string;

  @Column({ length: 45, nullable: true })
  color: string;

  @Column({ length: 45, nullable: true })
  temperamento: string;

  @Column({ length: 45, nullable: true })
  energia: string;

  @Column({ length: 45, nullable: true })
  cuidado: string;

  @Column({ length: 45, nullable: true })
  imagen: string;

  @ManyToOne(() => Raza)
  @JoinColumn({ name: 'id_raza' })
  raza: Raza;
}
