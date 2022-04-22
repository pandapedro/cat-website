import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { createUser } from "../../db/db";

const scope = ["identify", "guilds"].join(" ");
const REDIRECT_URI = `${process.env.URL}/api/oauth`;

const OAUTH_QS = new URLSearchParams({
  client_id: process.env.ID,
  redirect_uri: REDIRECT_URI,
  response_type: "code",
  scope,
}).toString();

const OAUTH_URI = `https://discord.com/api/oauth2/authorize?${OAUTH_QS}`;

export default async (req, res) => {
  if (req.method !== "GET") return res.redirect("/");

  const { code = null, error = null } = req.query;

  if (error) {
    return res.redirect(`/?error=${req.query.error}`);
  }

  if (!code || typeof code !== "string") return res.redirect(OAUTH_URI);

  const body = new URLSearchParams({
    client_id: process.env.ID,
    client_secret: process.env.SECRET,
    grant_type: "authorization_code",
    redirect_uri: REDIRECT_URI,
    code,
    scope,
  }).toString();

  const { access_token = null, token_type = "Bearer" } = await fetch(
    "https://discord.com/api/oauth2/token",
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST",
      body,
    }
  ).then((res) => res.json());

  if (!access_token || typeof access_token !== "string") {
    return res.redirect(OAUTH_URI);
  }

  const me = await fetch(
    "http://discord.com/api/users/@me",
    {
      headers: { Authorization: `${token_type} ${access_token}` },
    }
  ).then((res) => res.json());

  if (!("id" in me)) {
    return res.redirect(OAUTH_URI);
  }

  const token = sign(me, "JWT_SECRET", { expiresIn: "1y" });

  await createUser({
    access_token,
    token_type,
    jwt_token: token,
  });

  res.setHeader(
    "Set-Cookie",
    serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "lax",
      path: "/",
    })
  );

  res.redirect("/");
};
