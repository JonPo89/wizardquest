export async function submitStory(model, hero, adventure) {
  const input = {
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

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/0d12a4bfe96a08d221071e4792c99c81/ai/run/${model}`,
      {
        headers: { Authorization: "Bearer cXhJcthdw83S_olEUeiWeAlP7rs_ctZB1L5IDQhh" },
        method: "POST",
        body: JSON.stringify(input),
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error;
  }
}