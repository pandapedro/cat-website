import Script from "next/script";
import Head from "next/head";

export async function getStaticProps() {
  let commands = await fetch(
    `https://discord.com/api/v9/applications/${process.env.ID}/commands`,
    {
      headers: {
        Authorization: `Bot ${process.env.TOKEN}`,
      },
    }
  ).then(async (res) => await res.json());

  return {
    props: {
      commands: commands,
    },
    revalidate: 360,
  };
}

export default function commandsPage(props) {
  return (
    <>
      <Head>
        <title>Cat - commands</title>
        <meta content="Cat - commands" property="og:title" />
        <meta content="My slash command list." property="og:description" />
        <meta
          content="https://embed.com/this-is-the-site-url"
          property="og:url"
        />
      </Head>
      <header>
        <div className="commands" style={{ marginTop: "0px" }}>
          <h1>Slash commands</h1>
        </div>
      </header>
      <main>
        <div className="commands" id="commands">
          <p>Carregando....</p>
        </div>
      </main>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        onLoad={() => {
          let cmds = {};
          $("#commands").text("");

          for (let c of props.commands) {
            let des = c.description.split("]")[0].replace("[", "");

            for (let o of c.options) {
              if (o.type === 1) {
                if (
                  o.description.includes("[") &&
                  o.description.includes("]")
                ) {
                  des = o.description.split("]")[0].replace("[", "");

                  if (!cmds[des]) cmds[des] = [`/${c.name} ${o.name}`];
                  else cmds[des].push(`/${c.name} ${o.name}`);
                } else {
                  if (!cmds[des]) cmds[des] = [`/${c.name} ${o.name}`];
                  else cmds[des].push(`/${c.name} ${o.name}`);
                }
              } else if (o.type === 2) {
                for (let u of o.options) {
                  if (
                    o.description.includes("[") &&
                    o.description.includes("]")
                  ) {
                    des = o.description.split("]")[0].replace("[", "");

                    if (!cmds[des])
                      cmds[des] = [`/${c.name} ${u.name} ${o.name}`];
                    else cmds[des].push(`/${c.name} ${u.name} ${o.name}`);
                  } else if (
                    u.description.includes("[") &&
                    u.description.includes("]")
                  ) {
                    des = u.description.split("]")[0].replace("[", "");

                    if (!cmds[des])
                      cmds[des] = [`/${c.name} ${u.name} ${o.name}`];
                    else cmds[des].push(`/${c.name} ${u.name} ${o.name}`);
                  } else {
                    if (!cmds[des])
                      cmds[des] = [`/${c.name} ${u.name} ${o.name}`];
                    else cmds[des].push(`/${c.name} ${u.name} ${o.name}`);
                  }
                }
              } else {
                if (!cmds[des]) cmds[des] = [`/${c.name}`];
                else cmds[des].push(`/${c.name}`);
              }
            }
          }

          let array = Object.keys(cmds);

          for (let a of array) {
            $("#commands").append(`
                <div class="menu-title">
                    <h2>${a.toLowerCase()}</h2>
                    <div class="menu-content">
                        <p>${cmds[a].join(", ")}</p>
                    </div>
                </div>
            `);
          }

          const menus = document.getElementsByClassName("menu-title");
          for (const menu of menus) {
            $(menu).click(function () {
              const commandContent = $(this).children(".menu-content");
              if (commandContent.css("display") == "none") {
                $(this).children("h2").children("span").text("-");
                commandContent.css("display", "block");
              } else {
                $(this).children("h2").children("span").text("+");
                commandContent.css("display", "none");
              }
            });
          }
        }}
      />
    </>
  );
}
