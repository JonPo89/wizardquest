export async function summariseStory(story) {
    try {
        const storyContent = JSON.stringify(story);
        const formattedStory = { role: 'user', content: storyContent};
        const storyString = encodeURIComponent(JSON.stringify(formattedStory));
        console.log(storyString);
        const response = await fetch(`https://storysummariser.jonporter89.workers.dev/?storyToSummarise=${storyString}`);
        if (response.ok) {
            const json = await response.json();
            console.log(json);
            return json[0].response.response;
        };
    } catch (error) {
        console.log(error);
    }
}


