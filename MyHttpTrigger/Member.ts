import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "member" })
export class Member {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
