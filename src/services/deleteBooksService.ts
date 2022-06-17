import { getRepository } from "typeorm";
import { Books } from "../entities/Books";

export class DeleteBooksService {
    async execute(id:string, alugado:string){
        const repo = getRepository(Books)

        if(!(await repo.findOne(id))) {
            return new Error ("O livro nao existe");
        }

        let book1 = await repo.findOne({alugado});

        if (book1) {
            return new Error("O nao pode ser excuido pois esta alugado")
        }
        await repo.delete(id)
    }
} 