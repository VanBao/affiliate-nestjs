import {PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToOne } from 'typeorm';

@Entity('campaign_banner')
export class BalanceEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: "int"})
    campaign_id: number;

    @Column({type: "int"})
    owner: number;

    @Column({type: "varchar", length: 255})
    name: String;

    @Column({type: "varchar", length: 255})
    size: String;

    @Column({type: "varchar", length: 255})
    link: String;

    @CreateDateColumn({type: "datetime"})
    created_at: String | Date;

    @UpdateDateColumn({type: "datetime"})
    updated_at: String | Date;
}

