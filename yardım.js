"ArviS - V13 Slash Yardım Komutu"

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
  .setTitle('Yardım Menüsü')
  .setColor('#8387DE')
  .setDescription(
  `
     **Komut Listesi**:
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
  .setImage('RESİM LİNKİ')
  .setTimestamp()
  message.channel.send({ embeds: [ypm] })
    }
};
