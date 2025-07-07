import express from 'express';
import { launch } from 'puppeteer';

const app = express();
const PORT = 3000;

// 👋 Home Route
app.get('/', (req, res) => {
  res.send('Hello, Sohaib! Your server is running 🚀');
});

// 🕷 Scrape Route
app.get('/scrape', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Please provide a ?url=' });
  }

  try {
    const browser = await launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'], // safer for deployment
    });

    const page = await browser.newPage();

    // Optional: Pretend to be a real browser
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
    );

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

    const fullHTML = await page.content();

    await browser.close();

    res.set('Content-Type', 'text/html');
    res.send(fullHTML);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.listen(PORT, () => {
  console.log(`✅ Server is live at http://localhost:${PORT}`);
});
