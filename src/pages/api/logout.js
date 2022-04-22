import { parse, serialize } from "cookie";
//import { deleteUser } from "../../db/db";

export default async (_, res) => {
  res.setHeader("Set-Cookie", [
    serialize("token", "", {
      maxAge: -1,
      path: "/",
    }),
  ]);

  const token = parse(_.headers.cookie)["token"];
  /*await deleteUser({
    jwt_token: token,
  });*/

  res.writeHead(302, { Location: "/" });
  res.end();
};
