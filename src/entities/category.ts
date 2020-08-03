import {PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, BeforeInsert } from 'typeorm';
import * as slugify from 'slug';

@Entity('users')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: "varchar", length: 255})
    display_name: string;

    @Column({type: "text"})
    password: string;

    @Column({type: "int"})
    country: number;

    @Column({type: "varchar", length: 255})
    address: string;

    @Column({type: "tinyint"})
    gender: number;

    @Column({type: "varchar", length: 255})
    passport_id: string;

    @Column({type: "tinyint"})
    status: number;
    
    @Column({type: "tinyint"})
    role: number;

    @Column({type: "tinyint"})
    level: number;

    @Column({type: "int"})
    affiliator_id: number;

    @Column({type: "int"})
    group_id: number;

    @Column({type: "datetime"})
    expire_date: String | Date;

    @Column({type: "varchar", length: 255})
    user_code: String;

    @Column({type: "int"})
    f0: number;

    @Column({type: "varchar", length: 255})
    phone: String;

    @Column({type: "text"})
    arr_parent;

    @Column({type: "text"})
    social: String;
    
    @Column({type: "text"})
    infor_to_verify: String;

    @Column({type: "varchar", length: 255})
    avatar: String;

    @Column({type: "varchar", length: 255})
    domain: String;

    @Column({type: "varchar", length: 500})
    description: String;

    @Column({type: "tinyint"})
    register_from: number;

    @Column({type: "text"})
    find_raw: String;

    @CreateDateColumn({type: "datetime"})
    created_at: String | Date;

    @UpdateDateColumn({type: "datetime"})
    updated_at: String | Date;

    @BeforeInsert()
    generateFindraw(){
        
    }
}

