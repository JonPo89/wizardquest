export async function storyGenerator(heroName, heroWeapon, heroTrait, story) {
    try {
      const storyString = encodeURIComponent(JSON.stringify(story));
      const response = await fetch(`https://storygenerator.jonporter89.workers.dev/?heroName=${heroName}&heroWeapon=${heroWeapon}&heroTrait=${heroTrait}&storyProgress=${storyString}`);
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        return formatResponse(json[0].response.response);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  function formatResponse(response) {
    return response.replace(/\\n/g, '\n');
  }