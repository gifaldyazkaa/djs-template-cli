import { Slash } from '../../Interfaces';

export const slash: Slash = {
  name: 'ping',
  description: 'Ping command',
  testOnly: true,
  run: async (client, interaction, args) => {
    interaction.followUp({ content: `${client.ws.ping}ms` });
  },
};
