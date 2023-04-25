const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors()); // Enable CORS for all routes
app.use(express.json({ limit: "50mb" }));

app.post("/v1/convert", async (req, res) => {
  try {
    const { html, css, options } = req.body;
    const browser = await puppeteer.launch({
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--no-zygote"],
      headless: "new",
    });

    const page = await browser.newPage();
    await page.setContent(`<style>${css}</style>${html}`);
    await page.emulateMediaType("screen");

    const pdfOptions = {
      format: options.format || "A4",
      margin: {
        top: options.margin_top || "10mm",
        bottom: options.margin_bottom || "10mm",
        left: options.margin_left || "10mm",
        right: options.margin_right || "10mm",
      },
      printBackground: true,
      ...options,
    };

    const pdfBuffer = await page.pdf(pdfOptions);
    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="converted.pdf"'
    );
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
