import { getRepository } from "typeorm";
import { Books } from "../entities/Books";

// type BooksRequest = {
//     user_id: string,}

export class GetBookService {
    async execute(id){
        const repo = getRepository(Books);

        const book = await repo.findOne(id)

        return book;
    }
}