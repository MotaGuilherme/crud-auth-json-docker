import { getRepository } from "typeorm";
import { Books } from "../entities/Books";

export class GetAllBookService {
    async execute(){
        const repo = getRepository(Books);

        const book = await repo.find()

        return book;
    }
}