require('dotenv').config();

const app = require('./Src/app');  // Adjust the path if needed


const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI;
const openaiApiKey = process.env.OPENAI_API_KEY;
const debugMode = process.env.DEBUG === 'true';

console.log('Mongo URI:', mongoUri);
console.log('OpenAI API Key:', openaiApiKey);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// restart trigger