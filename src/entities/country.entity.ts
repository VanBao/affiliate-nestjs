import {PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity('country')
export class CountryEnity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: "varchar", length: 255})
    name: string;

    @Column({type: "varchar", length: 255})
    code: string;

    @Column({type: 'varchar', length: 255})
    dial_code: string;

    @CreateDateColumn({type: "datetime"})
    created_at: String | Date;

    @UpdateDateColumn({type: "datetime"})
    updated_at: String | Date;
}

