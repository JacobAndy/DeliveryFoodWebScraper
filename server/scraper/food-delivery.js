const puppeteer = require("puppeteer");

const papaJohns = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
};
const pizzaHut = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
};
const paneraBread = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
};
const dominos = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
};
const jimmyJohns = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
};

module.exports = {
  paneraBread,
  papaJohns,
  pizzaHut,
  dominos,
  jimmyJohns
};
