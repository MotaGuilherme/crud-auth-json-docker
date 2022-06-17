import { Request, Response } from "express";
import { DeleteBooksService } from "../services/deleteBooksService";

export class DeleteBooksController {
    async handle(request: Request, response:Response){
        const { id, alugado } = request.params;

        const service = new DeleteBooksService()

        const result = await service.execute(id, alugado)

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(204).end();
    }
}