import {PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';


@Entity('news')
export class NewsEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    owner: number;

    @Column()
    category: number;

    @Column()
    title: string;

    @Column()
    writer: number;

    @Column()
    image: string;

    @Column()
    content: string;

    @Column()
    language: string;

    @Column()
    hot: number;

    @Column()
    status: number;

    @Column()
    find_raw: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

