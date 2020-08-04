import {PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, BeforeInsert, BeforeUpdate, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import * as slugify from 'slug';
import {Exclude} from 'class-transformer';
import { TrainingCategoryEntity } from './training-category.entity';
import { TrainingPostEntity } from './training-post.entity';
import { UserEntity } from './user.entity';


@Entity('training_request')
export class TrainingRequestEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: "int"})
    @Exclude()
    owner: number;

    @Column({type: "int"})
    @OneToOne(type => UserEntity, user => user.id, {
        cascade: true
    })
    @JoinColumn({name: "uid"})
    uid: number;

    @Column({type: "int"})
    @ManyToOne(type => TrainingCategoryEntity, training_category => training_category.id, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: "training_category"})
    training_category: number;

    @Column({type: "int"})
    @ManyToOne(type => TrainingPostEntity, training_post => training_post.id, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: "training_post"})
    traing_post: number

    @Column({type: "varchar", length: 255})
    name: string;

    @Column({type: "varchar", length: 255})
    phone: string;

    @Column({type: 'varchar', length: 255})
    email: string;

    @Column({type: "varchar", length: 255})
    note: string;

    @Column({type: "tinyint"})
    status: number;

    @Column({type: "tinyint"})
    is_read: number;

    @Column({type: "text"})
    find_raw: string;

    @CreateDateColumn({type: "datetime"})
    created_at: Date;

    @UpdateDateColumn({type: "datetime"})
    updated_at: Date;

    @BeforeInsert()
    @BeforeUpdate()
    generateFindraw(){
        this.find_raw = (this.phone ? this.phone + '-' : '') + (this.email ? this.email + '-' : '') +  (this.name ? this.name + '-' : '') + (this.name ? slugify(this.name) + '-' : '') +  (this.phone ? slugify(this.phone) + '-' : '') + (this.email ? slugify(this.email) + '-' : '');
    }
}

