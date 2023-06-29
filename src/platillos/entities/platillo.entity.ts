import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('platillos')
export class PlatilloEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
  @Column()
  precio:number;

  //@OneToMany(() => PedidoEntity, pedido => pedido.platillo)
  //pedido: PedidoEntity[]; 
}
