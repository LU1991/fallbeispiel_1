/*const driver = new webdriver.Builder()
        .forBrowser('chrome')
		.build();

driver.get('http://www.google.de');
const navPreise = driver.findElement(By.id('preise'));
navPreise.click();

//driver.quit();
*/


/*const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost/Laura/EPS/Fallbeispiel_1/');
    await driver.findElement(By.id('preise').click());
    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    //await driver.quit();
  }
})();*/

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

let driver = new webdriver.Builder()
    .forBrowser('firefox')
    .setChromeOptions(/* ... */)
    .setFirefoxOptions(/* ... */)
    .build();