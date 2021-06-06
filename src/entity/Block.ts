import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class BlockEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() hash: string;
}