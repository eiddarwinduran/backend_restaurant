import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('pedidos')
export class PedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreC:string;

  @Column()
  direccion: string;

  @Column()
  nombreProducto:string;

  @Column()
  cantidad:number;


  @CreateDateColumn()
  fechaPedido: Date;
}
