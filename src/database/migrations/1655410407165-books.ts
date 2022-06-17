import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { v4 as uuid } from "uuid";


export class books1655410407165 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
              name: "books",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "alugado",                    
                    type: "integer"
                }
                
                 
              ],
            })
          );
    }
 
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("books");
    }

}
