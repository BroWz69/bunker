const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  const embed = new MessageEmbed()
    .setDescription(message.guild.name)
    .setThumbnail(message.guild.iconURL())
    .addField("Membres", message.guild.memberCount, true)
    .setFooter(message.guild.owner.user.tag.avatarURL())
    .setTimestamp();
  message.channel.send(embed);
};

