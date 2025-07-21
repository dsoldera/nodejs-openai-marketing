import { generateProducts } from "./openai";
import express from 'express';

const app = express();

app.post('/generate', async (req, res) => {
  try {
    const products = await generateProducts(req.body.message);
    res.json(products);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default app;