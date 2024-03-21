import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { cors } from '@elysiajs/cors';
import { queryIndexPals } from "./schemas";
import { IndexPalsUseCase } from "./useCases";

const app = new Elysia()
  .use(staticPlugin())
  .use(cors({
    origin: /.*/
  }))
  .get(
    "/",
    ({ query: { page, limit, term, ...filter } }) =>
      IndexPalsUseCase.execute({ page, limit, term, filter }),
    {
      query: queryIndexPals,
    }
  )
  .listen(3001);

console.log(`🦊 Elysia is running at on port ${app.server?.port}...`);
