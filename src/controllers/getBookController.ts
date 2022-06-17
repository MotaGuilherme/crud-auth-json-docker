import { Request, Response } from "express";
import {GetBookService} from "../services/getBookService"

export class GetBookController {
    async handle(request: Request, response: Response){ 

        const { id }= request.params;

        const service = new GetBookService()

        const book = await service.execute(id)

        return response.json(book)
    }
}