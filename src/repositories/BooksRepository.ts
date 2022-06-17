import { Books } from "../entities/Books";
import { getRepository } from "typeorm";

export const BooksRepository = () => {
  return getRepository(Books);
}; 