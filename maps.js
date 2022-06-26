
const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000 ;

app.get('/', async(req,res) => {
    first=req.query.first,
    second=req.query.second
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-gpu', '--enable-webgl', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    let url = "https://www.google.co.in/maps/dir/"+first+"/"+second ;
 await page.goto(url);
 /*await page.waitForSelector(".XdKEzd");
 let element = await page.$(".XdKEzd");

 let value = await page.evaluate(el=> el.textContent, element); */

 await page.waitForXPath('//*[@id="section-directions-trip-0"]/div[1]/div[1]/div[1]/div[2]/div');
 let [element] = await page.$x('//*[@id="section-directions-trip-0"]/div[1]/div[1]/div[1]/div[2]/div');
 let km = await page.evaluate(element => element.textContent, element); 
 km= km.trim(); 
 await page.waitForXPath('//*[@id="section-directions-trip-0"]/div[1]/div[1]/div[1]/div[1]/span[1]');
 let [elemen] = await page.$x('//*[@id="section-directions-trip-0"]/div[1]/div[1]/div[1]/div[1]/span[1]');
 let min = await page.evaluate(element => element.textContent, elemen); 
 min= min.trim(); 
  try{ 
 //await page.waitForXPath('//*[@id="section-directions-trip-1"]/div[1]/div[1]/div[1]/div[2]/div');
 let [eleme] = await page.$x('//*[@id="section-directions-trip-1"]/div[1]/div[1]/div[1]/div[2]/div');
 let km2 = await page.evaluate(element => element.textContent, eleme); 
 km2= km2.trim(); 
 //await page.waitForXPath('//*[@id="section-directions-trip-1"]/div[1]/div[1]/div[1]/div[1]/span[1]');
 let [elem] = await page.$x('//*[@id="section-directions-trip-1"]/div[1]/div[1]/div[1]/div[1]/span[1]');
 let min2 = await page.evaluate(element => element.textContent, elem); 
 min2= min2.trim(); 
 let ress = {KM: km,
    MIN: min,
    KM2: km2,
    MIN2: min2         


};
await browser.close();
res.send(JSON.stringify(ress));
 }catch {
    let ress = {KM: km,
        MIN: min,
        KM2: "null",
        MIN2: "null"  };
        await browser.close();
      res.send(JSON.stringify(ress)); 
 }

});


app.listen(PORT,() => {


});