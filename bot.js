const http = require("http");
const express = require("express");
const app = express();
const Discord = require("discord.js");
const Twitter = require("twitter");
const dj = require("./data.json");

const prefix = process.env.prefix;
const bot = new Discord.Client();
const twitter = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});
let prefixLength = prefix.length;
let embed;
let id = undefined;
let params = {
  screen_name: "Wakfu_FR"
};

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 200000);

bot.once("ready", () => {
  console.log("Bot Ready !");
});

bot.on("message", message => {
  bot.user.setActivity("Wakfu | w!help", { type: "PLAYING" });
  if (message.content.startsWith(`${prefix}`)) {
    var cmd = message.content.substring(prefixLength).split(" ");
    switch (cmd[0]) {
      case "help":
      case "h":
        switch (cmd[1]) {
          case "dj":
            message.author.send(
              "Affiche les infos sur un donjon spécifique, utilisez ``" +
                `${prefix}dj <nom du donjon>` +
                "`` ou ``" +
                `${prefix}dj list` +
                "``" +
                " pour avoir la liste des donjons disponibles"
            );
            break;

          default:
            embed = {
              title: "Liste des commandes",
              description:
                "Vous pouvez faire ``" +
                `${prefix}help <commande>` +
                "`` ou ``" +
                `${prefix}h <commande>` +
                "`` pour avoir des infos complémentaires sur la commande",
              color: "#00FFFF",
              fields: [
                {
                  name: "\u200B",
                  value: "\u200B"
                },
                {
                  name:
                    "``" + `${prefix}help` + "`` ou ``" + `${prefix}h` + "``",
                  value: "Affiche cette aide"
                },
                {
                  name: "``" + `${prefix}prefix` + "``",
                  value: "Affiche le prefix de ce bot"
                },
                {
                  name: "``" + `${prefix}dj list` + "``",
                  value: "Affiche la liste des donjons"
                },
                {
                  name: "``" + `${prefix}dj <nom du donjon>` + "``",
                  value: "Affiche toutes les infos sur le donjon demandé"
                }
                // {
                //     "name": `${prefix}`,
                //     "value": ""
                // },
              ]
            };
            message.author.send({ embed });
        }
        break;

      case "dj":
        if (cmd[1] == "list") {
          embed = new Discord.MessageEmbed()
            .setTitle(`Liste des Donjons (Niveau 3 à 21)`)
            .setDescription(
              "Tapez ``" +
                `${prefix}dj <nom du donjon>` +
                "`` pour avoir toutes les infos sur le donjon demandé"
            )
            .setColor("#00FFFF")
            .addField("\u200B", "**Niveau 3**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "3") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          embed.addField("\u200B", "**Niveau 9**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "9") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          embed.addField("\u200B", "**Niveau 10**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "10") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          embed.addField("\u200B", "**Niveau 12**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "12") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          embed.addField("\u200B", "**Niveau 21**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "21") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          message.author.send({ embed });

          embed = new Discord.MessageEmbed()
            .setTitle(`Liste des Donjons (Niveau 36 à 51)`)
            .setDescription(
              "Tapez ``" +
                `${prefix}dj <nom du donjon>` +
                "`` pour avoir toutes les infos sur le donjon demandé"
            )
            .setColor("#00FFFF")
            .addField("\u200B", "**Niveau 36**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "36") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          embed.addField("\u200B", "**Niveau 51**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "51") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          message.author.send({ embed });

          embed = new Discord.MessageEmbed()
            .setTitle(`Liste des Donjons (Niveau 66 à 81)`)
            .setDescription(
              "Tapez ``" +
                `${prefix}dj <nom du donjon>` +
                "`` pour avoir toutes les infos sur le donjon demandé"
            )
            .setColor("#00FFFF")
            .addField("\u200B", "**Niveau 66**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "66") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          embed.addField("\u200B", "**Niveau 81**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "81") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          message.author.send({ embed });

          embed = new Discord.MessageEmbed()
            .setTitle(`Liste des Donjons (Niveau 96 à 111)`)
            .setDescription(
              "Tapez ``" +
                `${prefix}dj <nom du donjon>` +
                "`` pour avoir toutes les infos sur le donjon demandé"
            )
            .setColor("#00FFFF")
            .addField("\u200B", "**Niveau 96**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "96") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          embed.addField("\u200B", "**Niveau 111**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "111") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          message.author.send({ embed });

          embed = new Discord.MessageEmbed()
            .setTitle(`Liste des Donjons (Niveau 126 à 141)`)
            .setDescription(
              "Tapez ``" +
                `${prefix}dj <nom du donjon>` +
                "`` pour avoir toutes les infos sur le donjon demandé"
            )
            .setColor("#00FFFF")
            .addField("\u200B", "**Niveau 126**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "126") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          embed.addField("\u200B", "**Niveau 141**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "141") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          message.author.send({ embed });

          embed = new Discord.MessageEmbed()
            .setTitle(`Liste des Donjons (Niveau 156 à 171)`)
            .setDescription(
              "Tapez ``" +
                `${prefix}dj <nom du donjon>` +
                "`` pour avoir toutes les infos sur le donjon demandé"
            )
            .setColor("#00FFFF")
            .addField("\u200B", "**Niveau 156**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "156") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          embed.addField("\u200B", "**Niveau 171**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "171") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          message.author.send({ embed });

          embed = new Discord.MessageEmbed()
            .setTitle(`Liste des Donjons (Niveau 186 à 200)`)
            .setDescription(
              "Tapez ``" +
                `${prefix}dj <nom du donjon>` +
                "`` pour avoir toutes les infos sur le donjon demandé"
            )
            .setColor("#00FFFF")
            .addField("\u200B", "**Niveau 186**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "186") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          embed.addField("\u200B", "**Niveau 200**", false);
          for (let i = 0; i < dj.length; i++) {
            if (dj[i].level == "200") {
              embed.addField(
                "``" + `${dj[i].cmd}` + "``",
                `${dj[i].full_name}`,
                true
              );
            }
          }
          message.author.send({ embed });
        } else {
          for (let i = 0; i < dj.length; i++) {
            if (cmd[1] == dj[i].cmd) {
              id = i;
              embed = new Discord.MessageEmbed()
                .setTitle(`${dj[id].full_name} (Niveau ${dj[id].level})`)
                .setDescription(`**${dj[id].position}**`)
                .setColor("#FF0000")
                .setThumbnail(`${dj[id].boss_image}`)
                .addFields(
                  { name: "\u200B", value: "\u200B" },
                  { name: "**Nom du boss**", value: `${dj[id].boss_name}` },
                  { name: "\u200B", value: "\u200B" },
                  {
                    name: "**Relique**",
                    value: `${dj[id].relic}`,
                    inline: true
                  },
                  { name: "**Epique**", value: `${dj[id].epic}`, inline: true },
                  { name: "\u200B", value: "\u200B" },
                  { name: "**Stratégie**", value: `- ${dj[id].strat[0]}` }
                );
              for (let i = 1; i < dj[id].strat.length; i++) {
                embed.addField("\u200B", `- ${dj[id].strat[i]}`, false);
              }
              embed.addFields(
                { name: "\u200B", value: "\u200B" },
                { name: "**Autres**", value: `- ${dj[id].other[0]}` }
              );
              for (let i = 1; i < dj[id].other.length; i++) {
                embed.addField("\u200B", `- ${dj[id].other[i]}`, false);
              }
              message.author.send({ embed });
            }
          }
          if (id == undefined) {
            message.author.send("Donjon inconnu !");
            message.author.send(
              "Tapez ``" +
                `${prefix}dj list` +
                "`` pour avoir la liste des donjons disponibles"
            );
          }
          id = undefined;
        }
        break;

      default:
        message.author.send("Commande inconnue !");
        message.author.send(
          "Tapez ``" +
            `${prefix}help` +
            "`` ou ``" +
            `${prefix}h` +
            "`` pour voir la liste des commandes disponibles"
        );
    }
    message.react("✅");
  }
});

bot.login(process.env.bot_token);
