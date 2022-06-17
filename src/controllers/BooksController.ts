import { Request, Response } from "express";
import {CreateBookService} from "../services/BooksService"

export class CreateBookController {
    async handle(request: Request, response: Response){
    
    const { name, description, alugado } =  request.body;

    const service = await new CreateBookService()

    const result = await service.execute({ name, description, alugado })
    
    if(result instanceof Error){
        return response.status(400).json(result.message)
    }
    return response.json(result) 
    }
} 