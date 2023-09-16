import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Goods {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: '商品标题',
    nullable: false,
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: '商品描述',
  })
  description: string;

  @Column({
    type: 'decimal',
    comment: '商品价格',
    precision:10,
    scale:3,
    nullable: true,
  })
  price: number;

  @Column({
    type: 'longtext',
    comment: '商品详情',
  })
  detail: string;

  @CreateDateColumn({comment:"创建时间"})
  createDate:Date;
  
  @UpdateDateColumn({comment:"修改时间"})
  modifiedDate:Date;

  @Column({comment:"修改人"})
  modifier:string

  @Column({comment:"创建人"})
  creator:string
}
