import {Books} from '../entities/Books'
import { getRepository } from 'typeorm'

type BooksRequest = {
    id: string,
    name: string,
    description: string, 
    alugado: string 
    
}

export class AlugaBookService {
    async execute({name, description, alugado, id}:BooksRequest) {
        const repo = getRepository(Books);

        const book = await repo.findOne(id);
        
        let book1 = await repo.findOne({alugado});
        if (book1) {
            return new Error("O livro ja foi alugado")
        }

        book.name = name ? name: book.name
        book.alugado = alugado ? alugado: "1";
        book.description = description ? description: book.description;

      
        await repo.save(book)
    }
} 