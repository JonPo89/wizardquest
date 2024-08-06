async function run(model, input) {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/0d12a4bfe96a08d221071e4792c99c81/ai/run/${model}`,
      {
        headers: { Authorization: "Bearer gtjXg_1RnYEyn1-LJbeRfjZ2dx20XYDCJ7gSuLOQ" },
        method: "POST",
        body: JSON.stringify(input),
      }
    );
    const result = await response.json();
    return result;
  }
  
  run("@cf/meta/llama-3-8b-instruct", {
    messages: [
      {
        role: "system",
        content: "You are a wise Wizard in a tavern in a fantasy world, telling stories about travellers adventures.",
      },
      {
        role: "user",
        content:
          `Write a short story about a hero ${hero.name}, who goes on a journey through the fantasy realm to rescue a brave little prince from a bad dragon.  Through their journey they encounter various obstacles, such as orcs, and faeries, but using their abilities with the ${hero.weapon} and ${hero.trait} they overcome them.`,
      },
    ],
  }).then((response) => {
    console.log(JSON.stringify(response));
  });