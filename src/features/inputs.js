
export const input1 = {
    messages: [
      {
        role: "system",
        content: "You are a wise Wizard in a tavern in a fantasy world, telling stories about travellers adventures.",
      },
      {
        role: "user",
        content: `You are talking to the hero ${hero.name}, a hero that is well known for their ${hero.trait} and their expertise with the ${hero.weapon}.  Tell the tale of their journey through the fantasy realm to rescue ${adventure.rescue} from a ${adventure.boss}. Warn them that their journey will be treachorous and full of dangers.  Describe an encounter with ${adventure.enemies} where the hero must overcome them, and be rewarded with the treasure ${adventure.treasure} which will help them overpower the ${adventure.boss}.  This story will have a ${adventure.storyType} ending.`,
      },
    ],
};