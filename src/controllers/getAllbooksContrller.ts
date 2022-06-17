import { Request, Response } from "express";
import {GetAllBookService} from "../services/getAllBooksService"

export class GetAllBookController {
    async handle(request: Request, response: Response){ 

        const service = new GetAllBookService()

        const book = await service.execute()

        return response.json(book)
    }
}