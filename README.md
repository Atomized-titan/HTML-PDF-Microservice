# HTML-PDF-Microservice

This microservice takes an HTML string and an optional CSS string as input and converts the HTML into a downloadable PDF file. The microservice is built using Node.js, Express, and Puppeteer.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/HTML-PDF-Microservice.git
```

2. Navigate to the project folder:

```bash
cd HTML-PDF-Microservice
```

3. Install the dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

The server should start, and you can access it at `http://localhost:3000`.

## Usage

To convert an HTML string to a PDF, send a `POST` request to the `/convert` endpoint with the following JSON payload:

```json

{
  "html": "<html>...</html>",
  "css": "/* Optional CSS styles */"
"options": {
    "format": "A4",
    "margin_top": "10mm",
    "margin_bottom": "10mm",
    "margin_left": "10mm",
    "margin_right": "10mm",
    "printBackground": true
  }
}
```

The `options` object is optional and can be used to customize the PDF output. For more information, see the [Puppeteer documentation](https://pptr.dev/api/puppeteer.pdfoptions/).

<!-- Deploying to a hosting provider
You can deploy this microservice to various hosting providers like Vercel, Netlify, or Google Cloud Functions. Please refer to their respective documentation for deployment instructions. -->

## Deployment

You can deploy this microservice to various hosting providers like Vercel, Netlify, or Google Cloud Functions. Please refer to their respective documentation for deployment instructions.

Note: If you are deploying to Vercel, you will need to add the `puppeteer-core` package to the `vercel.json` file:

```json
{
  "build": {
    "env": {
      "NPM_PACKAGE": "puppeteer-core"
    }
  }
}
```

Disclaimer: Puppeteer apps can be heavy on resources, so make sure to use a hosting provider that supports serverless functions.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgements

- [Puppeteer](https://pptr.dev/)
- [Express](https://expressjs.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Heroku](https://www.heroku.com/)
- [DigitalOcean](https://www.digitalocean.com/)
