import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ unique: true })
  name: string;

  @Field()
  @Column({ length: 2, unique: true })
  code: string;

  @Field()
  @Column({ length: 1, unique: true })
  emoji: string;

  @Field()
  @Column()
  continent: string;
}
