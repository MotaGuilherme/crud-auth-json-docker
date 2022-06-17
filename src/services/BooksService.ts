import {Books} from '../entities/Books'
import { BooksRepository } from '../repositories/BooksRepository'

type BooksRequest = {
name: string,
description: string, 
alugado: "" 

}

export class CreateBookService {

    async execute({name, description, alugado}: BooksRequest ): Promise<Books>{
       

        const book = BooksRepository().create({
            name, 
            description,
            alugado            
        });
         
        book.alugado = alugado ? alugado : "0"

        await BooksRepository().save(book);

        return book;
    }


}
