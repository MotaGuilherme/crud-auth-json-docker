import {Books} from '../entities/Books'
import { getRepository } from 'typeorm'

type BooksRequest = {
    id: string,
    name: string,
    description: string, 
    alugado: string 
    
}

export class EditaBookService {
    async execute({name, description, alugado, id}:BooksRequest) {
        const repo = getRepository(Books);

        const book = await repo.findOne(id);     
      
        if (!book) {
            return new Error("O livro nao existe")
        }

        book.name = name ? name: book.name
        book.alugado = alugado ? alugado: book.alugado;
        book.description = description ? description: book.description;

      
        await repo.save(book)
    }
} 