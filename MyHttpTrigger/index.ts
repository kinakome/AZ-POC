import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { createConnection } from "typeorm";
import { Member } from "./Member";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");

  const connection = await createConnection({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "SA",
    password: "password",
    database: "DEMO",
    entities: [Member],
    options: { encrypt: false },
  });

  const member = await connection
    .createQueryBuilder(Member, "member")
    .where("member.id = :id", { id: 1 })
    .getOne();

  context.res = {
    body: JSON.stringify(member),
  };
};

export default httpTrigger;
