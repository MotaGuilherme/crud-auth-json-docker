import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";


@Entity("books")

export class Books {
  
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string

    @Column()
    alugado: string 
 
    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }
}