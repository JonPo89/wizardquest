export async function run(model, input) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/0d12a4bfe96a08d221071e4792c99c81/ai/run/${model}`,
    {
      headers: { Authorization: "Bearer 8V-28OpFNrsi-Bxq8EwJhyYeDu-U7svt4gjsebtW" },
      method: "POST",
      body: JSON.stringify(input),
    }
  );
  const result = await response.json();
  return result;
}
