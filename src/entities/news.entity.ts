import { NewsCategoryEntity } from './news-category.entity';
import {PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn } from 'typeorm';
import * as slugify from 'slug';
import {Exclude} from 'class-transformer';


@Entity('news')
export class NewsEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: "int"})
    @Exclude()
    owner: number;

    @Column({type: "int"})
    @ManyToOne(type => NewsCategoryEntity, category => category.id, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'category'})
    category: number;

    @Column({type: "varchar", length: 255})
    title: string;

    @Column({type: "int"})
    writer: number;

    @Column({type: "varchar", length: 255})
    image: string;

    @Column({type: "text"})
    content: string;

    @Column({type: "varchar", length: 3})
    language: string;

    @Column({type: "boolean"})
    hot: number;

    @Column({type: "tinyint"})
    status: number;

    @Column({type: "text"})
    find_raw: string;

    @CreateDateColumn({type: "datetime"})
    created_at: Date;

    @UpdateDateColumn({type: "datetime"})
    updated_at: Date;

    @BeforeInsert()
    @BeforeUpdate()
    generateFindraw(){
        this.find_raw = (this.title ? this.title + '-' : '') + (this.content ? this.content + '-' : '') + (this.title ? slugify(this.title) + '-' : '') +  (this.content ? slugify(this.content) + '-' : '');
    }
}

