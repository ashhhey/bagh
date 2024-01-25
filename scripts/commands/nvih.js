const axios = require('axios');

module.exports.config = {
  name: "neverhaveiever",
  version: "1.0",
  hasPermission: 0,
  credits: "AMONIMOUSEEE RC SENUI API BTW",
  usePrefix: true,
  description: "Get a random 'Never Have I Ever' question.",
  commandCategory: "Fun",
  cooldowns: 2,
};

module.exports.run = async ({ api, event }) => {
  try {
    const response = await axios.get('https://sensui-useless-apis.codersensui.repl.co/api/fun/neverhaveiever');
    const question = response.data.question;
    const tagalogTranslation = response.data.tagalogTranslation;

    api.sendMessage(`Never have I ever:\n\n${question}\n(Tagalog: ${tagalogTranslation})`, event.threadID);
  } catch (error) {
    console.error('Error fetching "Never Have I Ever" question:', error);
    api.sendMessage("Unable to fetch 'Never Have I Ever' question at the moment.", event.threadID);
  }
};
