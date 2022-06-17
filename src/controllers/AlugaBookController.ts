import { Request, Response } from "express";
import { AlugaBookService } from "../services/AlugaBookService";

export class AlugaBookController {
async handle(request:Request, response: Response){
    const { id }= request.params;
    const { name, description, alugado } = request.body;

    const service = new AlugaBookService();

    const result = await service.execute({id, name, description, alugado});

    if (result instanceof Error){
        return response.status(400).json(result.message)
    }

    return response.json(result)
}
}