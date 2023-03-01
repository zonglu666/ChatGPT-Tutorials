// 加载配置文件
const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

// 初始化ChatGPT实例
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * 提问
 * @param {string} question
 */
async function sendTextToChatGpt(question) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003', // 使用的模型，固定值text-davinci-003
    prompt: question, // 你的问题
    temperature: 0, // 0~2之间
    max_tokens: 2048, // 答案的最大字符数
  });
  console.log('ChatGPT响应', response.data);
}

let question = '你是谁？'; // 你的提问
sendTextToChatGpt(question);
