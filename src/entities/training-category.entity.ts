import {PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, BeforeInsert, BeforeUpdate, OneToMany, JoinColumn } from 'typeorm';
import * as slugify from 'slug';
import {Exclude} from 'class-transformer';
import { TrainingPostEntity } from './training-post.entity';
import { type } from 'os';


@Entity('training_category')
export class TrainingCategoryEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    @OneToMany(type=>TrainingPostEntity, training_post => training_post.training_category, {
        cascade: true
    })
    @JoinColumn()
    id: number;

    @Column({type: "int"})
    @Exclude()
    owner: number;

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
        this.find_raw = (this.title ? this.title + '-' : '') + (this.summary ? this.summary + '-' : '') + (this.content ? this.content + '-' : '') + (this.title ? slugify(this.title) + '-' : '') + (this.summary ? slugify(this.summary) + '-' : '')  +  (this.content ? slugify(this.content) + '-' : '');
    }
}

