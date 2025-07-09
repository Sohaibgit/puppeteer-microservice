
# Puppeteer Microservice

This is a Node.js + Express-based microservice that uses Puppeteer to return the fully rendered HTML of any dynamic webpage. It's designed to work with JavaScript-heavy websites.

---

## 1. Features

- Accepts a public URL via query parameter (`?url=`)
- Launches a real headless browser using Puppeteer
- Waits for JavaScript-based content to load
- Returns the full rendered HTML of the page

---

## 2. Install Dependencies

Before using this microservice, make sure you have the following installed on your system:

- Node.js (https://nodejs.org)
- Git (https://git-scm.com)

To install project dependencies, open your terminal in the project folder and run:

```bash
npm install
```

This will install the following NPM packages:

- `express`: A web framework for handling HTTP requests
- `puppeteer`: A library to control a headless browser

These are listed in `package.json`.

---

## 3. Project Setup

Follow these steps to set up the project:

1. Clone this repository:

```bash
git clone https://github.com/Sohaibgit/puppeteer-microservice.git
cd puppeteer-microservice
```

2. Install all dependencies:

```bash
npm install
```

3. Make sure your `package.json` includes a start script like this:

```json
"scripts": {
  "start": "node index.js"
}
```

---

## 4. Running Locally

To run the project locally:

```bash
node index.js
```

Once the server starts, open your browser or Postman and visit:

```
http://localhost:3000/scrape?url=https://example.com
```

This will return the fully rendered HTML of the provided URL.

---

## 5. API Endpoint

### GET `/scrape`

**Required Query Parameter:**

- `url`: The full URL of the page you want to scrape

**Example:**

```
/scrape?url=https://example.com
```

**Response:**

The API will return the complete HTML source of the page after dynamic content is loaded.

---

## 6. Deployment

This project is deployable to cloud platforms like:

- Railway (https://railway.app)
- Render (https://render.com)
- Fly.io (https://fly.io)
- Any VPS or Node.js-compatible server

When deploying to hosting platforms, use the following Puppeteer config:

```js
const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
```

This ensures compatibility with container-based platforms.

---

## 7. Disclaimer

This tool is intended for educational use only. Scraping websites may violate their terms of service. You are responsible for ensuring you comply with legal and ethical use.

Do not use this service to scrape websites without reviewing their policies.

---

## 8. Author

Sohaib Khan  
GitHub: https://github.com/Sohaibgit
