import { serialize } from "cookie";

export default async (_, res) => {
  res.setHeader("Set-Cookie", [
    serialize("token", "", {
      maxAge: -1,
      path: "/",
    }),
  ]);

  res.writeHead(302, { Location: "/" });
  res.end();
};
