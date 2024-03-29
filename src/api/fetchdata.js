const { Configuration, OpenAIApi } = require("openai");

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_APIKEY;
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const Teachers = async (ask) => {
  const openai = new OpenAIApi(configuration);
  const completion = await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: ask,
      temperature: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
    })
    .catch((err) => {
      console.error(err);
    });
  return await completion.data.choices[0].message;
};

export { Teachers };
