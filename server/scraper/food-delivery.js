const puppeteer = require("puppeteer");

const papaJohns = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.papajohns.com");
  await page.click(
    "body > div.page-wrapper > header > section.nav-utility > nav > ul > li:nth-child(1) > a"
  );
  await page.waitFor(4000);
  await page.type("#locations-streetaddress", "2022 Sunnyside court", {
    delay: 30
  });
  await page.waitFor(600);
  await page.click("body > div.pac-container > .pac-item:nth-child(1)");
  // await page.waitFor(4000);
  // this is unnessecary due to when my bot clicks on the first option, it auto fills the zip code.
  // await page.type("#locations-usa-zipcode", "3");

  await page.waitFor(10);
  await page.click("#locations-form > div.button-set > input");
  await page.waitFor(4000);
  //Pepperoni Pizza
  await page.click("#order-button-0-1");
  // await page.click(
  //MENU
  // "body > div.page-wrapper > header > section.nav-main > nav > ul > li:nth-child(1)"

  //SPECIALS
  // li:nth-child(2)

  //PAPAS REWARDS
  // li:nth-child(3)
  // );
  // await page.waitFor(2000);
  // await page.click(
  //   "body > div.page-wrapper > main > section:nth-child(5) > div:nth-child(2) > ul > li > a"
  // );
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
papaJohns();

module.exports = {
  paneraBread,
  papaJohns,
  pizzaHut,
  dominos,
  jimmyJohns
};
