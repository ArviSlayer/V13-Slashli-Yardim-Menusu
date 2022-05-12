"ArviS - V13 Slash Yardım Komutu"
"İletişim: ArviSʼ#0011"

const { ApplicationCommandType, ApplicationCommandOptionType, ChatInputCommandInteraction, Client, EmbedBuilder } = require('discord.js');

module.exports = {
    type: ApplicationCommandType.ChatInput,
    name: 'yardım',
    description: 'Yardım Menüsü',
    options: [],
    /**
     * Run a chat input command interaction.
     * @param {ChatInputCommandInteraction} interaction The interaction.
     * @param {Client} client The client of the bot.
     */
    async run(interaction, client) {
        const ypm = new EmbedBuilder()
  .setTitle('Lusia Yardım Menüsü')
  .setColor('#8387DE')
  .setDescription(
  `
     **Lusia Komut Listesi**:
    `)
  .addFields([
      }
       name: 'Eval', 
       value: 'Admin', 
       inline: true
      },
      {      
       name: 'Kayıt', 
       value: 'Admin',
       inline: true)
      }
    ])
  .setImage('https://tolgchu.notion.site/image/https%3A%2F%2Fcdn.discordapp.com%2Ficons%2F944714138624618497%2Fa_76fed393b04db76bbf6b3255ffbdadb5.gif%3Fsize%3D1024?table=block&id=ba3c1e49-ad8e-4f39-a830-e8f48c4b77b9&spaceId=77bed4b8-a251-4cf2-9e60-81bb8c733d67&userId=&cache=v2')
  .setTimestamp()
  message.channel.send({ embeds: [ypm] })
    }
};
