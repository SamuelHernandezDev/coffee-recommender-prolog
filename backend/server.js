// backend/server.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const openai = require('./openai');

const coffees = require('./data/domain/coffees');

const buildKnowledgePrompt = require('./promts/knowledge.prompt');

const buildRecommendationPrompt = require('./promts/recommendation.prompt');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/api/assistant', async (req, res) => {
  try {
    const { mode, answers, message } = req.body;

    console.log('REQUEST:', req.body);

    // -----------------------
    // KNOWLEDGE MODE
    // -----------------------

    if (mode === 'knowledge') {
      const prompt = buildKnowledgePrompt(message);

      const completion = await openai.chat.completions.create({
        model: 'gpt-4.1-mini',

        messages: [
          {
            role: 'system',
            content: prompt,
          },
        ],
      });

      const reply = completion.choices[0].message.content;

      return res.json({
        type: 'message',
        message: reply,
      });
    }

    // -----------------------
    // RECOMMENDATION MODE
    // -----------------------

    if (mode === 'recommendation') {
      const prompt = buildRecommendationPrompt(answers, coffees);

      const completion = await openai.chat.completions.create({
        model: 'gpt-4.1-mini',

        messages: [
          {
            role: 'system',
            content: prompt,
          },
        ],
      });

      const raw = completion.choices[0].message.content;

      console.log('RAW AI RESPONSE:', raw);

      const parsed = JSON.parse(raw);

      return res.json({
        type: 'recommendation',

        recommendation: {
          id: parsed.coffeeId,
        },
      });
    }

    return res.status(400).json({
      error: 'Invalid mode',
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: 'Internal server error',
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('Server listening on', PORT);
});
