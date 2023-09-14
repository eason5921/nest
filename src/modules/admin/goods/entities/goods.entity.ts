import { Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Goods {
    @PrimaryGeneratedColumn()
    id:string
    
}
