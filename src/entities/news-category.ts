import { NewsEntity } from 'src/entities/news.entity';
import {PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, BeforeInsert } from 'typeorm';
import * as slugify from 'slug';

@Entity('news_category')
export class NewsCategoryEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    @OneToMany(type => NewsEntity, news => news.category)
    id: number;

    @Column({type: "int"})
    owner: number;

    @Column({type: "varchar", length: 255})
    title: string;

    @Column({type: "text"})
    summary: string;

    @Column({type: "varchar", length: 255})
    avatar: string;

    @Column({type: "varchar", length: 3})
    language: string;

    @Column({type: "tinyint"})
    status: number;

    @Column({type: "text"})
    find_raw: string;

    @CreateDateColumn({type: "datetime"})
    created_at: Date;

    @UpdateDateColumn({type: "datetime"})
    updated_at: Date;

    @BeforeInsert()
    generateFindraw(){
        this.find_raw = this.title + '-' + this.summary + '-' + slugify(this.title) + '-' + slugify(this.summary);
    }

}

