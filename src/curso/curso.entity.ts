import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('curso')
export class CursoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column() 
  imageURL: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_registro: Date;
}
