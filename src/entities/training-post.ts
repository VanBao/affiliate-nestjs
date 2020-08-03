import {PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, BeforeInsert, BeforeUpdate, OneToMany, ManyToOne } from 'typeorm';
import * as slugify from 'slug';
import {Exclude} from 'class-transformer';
import { TrainingCategoryEntity } from './training-category';


@Entity('training_post')
export class TrainingPostEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: "int"})
    @Exclude()
    owner: number;

    @Column({type: "int"})
    @ManyToOne(type => TrainingCategoryEntity, training_category => training_category.id)
    training_category_id: number;

    @Column({type: "varchar", length: 255})
    title: string;

    @Column({type: "text"})
    summary: string;

    @Column({type: "text"})
    content: string;

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
    @BeforeUpdate()
    generateFindraw(){
        this.find_raw = (this.title ? this.title + '-' : '') + (this.content ? this.content + '-' : '') + (this.title ? slugify(this.title) + '-' : '') +  (this.content ? slugify(this.content) + '-' : '');
    }
}

