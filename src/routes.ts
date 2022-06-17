import {Router} from 'express';
import { AlugaBookController } from './controllers/AlugaBookController';
import { CreateBookController } from './controllers/BooksController';
import { CreateUserController } from './controllers/CreateUserController';
import { DeleteBooksController } from './controllers/deleteBookController';
import { EditaBookController } from './controllers/EditaBookController';
import { GetAllBookController } from './controllers/getAllbooksContrller';
import { GetBookController } from './controllers/getBookController';
import { SessionController } from './controllers/SessionController';
import { ShowUserController } from './controllers/ShowUserController';
import { ensuredAuthenticated } from './middlewares/ensureAuthenticated';
import { GetBookService } from './services/getBookService';

const routes = Router();

routes.post("/users", new CreateUserController().handle);
routes.post("/login", new SessionController().handle);
routes.get("/me", ensuredAuthenticated(), new ShowUserController().handle);

routes.post("/books", ensuredAuthenticated(), new CreateBookController().handle);
routes.get("/allbooks", new GetAllBookController().handle)
routes.delete("/delete/:alugado/:id", ensuredAuthenticated(), new DeleteBooksController().handle)
routes.put("/aluga/:id", ensuredAuthenticated(), new AlugaBookController().handle )
routes.put("/edita/:id",ensuredAuthenticated(), new EditaBookController().handle )
routes.get("/book/:id", new GetBookController().handle)




 


export { routes }  