/*
 * @Author: dengpu 1255026858@qq.com
 * @Date: 2023-09-14 22:22:56
 * @LastEditors: dengpu 1255026858@qq.com
 * @LastEditTime: 2023-09-14 22:27:10
 * @FilePath: \nest-shop\src\modules\admin\users\entities\user.entity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Entity } from "typeorm";
import { Column,PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    id:number

    @Column({type:'varchar'})
    userName:string;

    @Column({type:'varchar'})
    passWord:string

    @Column({type:'varchar'})
    phone:string

    
}
