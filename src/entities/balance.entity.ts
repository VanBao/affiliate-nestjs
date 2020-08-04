import { UserEntity } from './user.entity';
import {PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';

@Entity('balance')
export class BalanceEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: "int"})
    @ManyToOne(type => UserEntity, user => user.id, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'uid'})
    uid: number;

    @Column({type: "int"})
    owner: number;

    @Column({type: "float"})
    old_balance: number;

    @Column({type: "float"})
    balance: number;

    @Column({type: "varchar", length: 3})
    currency: number;

    @Column({type: "varchar", length: 255})
    note: String;

    @CreateDateColumn({type: "datetime"})
    created_at: String | Date;

    @UpdateDateColumn({type: "datetime"})
    updated_at: String | Date;
}

