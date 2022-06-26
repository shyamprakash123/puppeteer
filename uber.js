
const puppeteer = require('puppeteer');
const fs = require('fs').promises;
 const uber = async () => {
    try{
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-gpu', '--enable-webgl', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    const add = await fs.readFile("./data.json");
    obj = JSON.parse(add.toString());
    let first = obj.first
    let second = obj.second
    const cookieString = await fs.readFile("./cookies_uber.json");
    const cookies = JSON.parse(cookieString);
    await page.setCookie(...cookies); 
    let url = "https://m.uber.com/looking"
 await page.goto(url, {
     waitUntil: 'networkidle2'
 });
  await page.waitForXPath('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[2]/div[1]/div[1]/div/div[2]/input')
  const element = await page.$x('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[2]/div[1]/div[1]/div/div[2]/input');
  await page.waitForTimeout(100)
  await element[0].type(first);
 while(5){
     try{
    let eleme = await page.$("._css-hvCmyE");
    let valu = await page.evaluate(el => el.textContent, eleme);
     if (first.includes(valu)){
        await page.click("._css-hvCmyE");
         break;
     }
    }catch{

    }
 } 
 await page.waitForXPath('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[2]/div[1]/div[3]/div/div[2]/input')
 const elemen = await page.$x('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[2]/div[1]/div[3]/div/div[2]/input');
 await page.waitForTimeout(100)
 await elemen[0].type(second);
 while(5){
     try{
    let ele = await page.$("._css-hvCmyE");
    let valu = await page.evaluate(el => el.textContent, ele);
     if (second.includes(valu)){
        await page.click("._css-hvCmyE");
         break;
     }
    }catch{
       
    }
 } 
 await page.waitForXPath('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[3]/div/div[1]/div[2]/div[1]/div[1]/div')
 const title = await page.$x('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[3]/div/div[1]/div[2]/div[1]/div[1]/div');
 let text = await page.evaluate(h1 => h1.textContent, title[0]);
 await page.waitForXPath('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[3]/div/div[1]/div[2]/div[1]/div[2]/div')
 const title1 = await page.$x('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[3]/div/div[1]/div[2]/div[1]/div[2]/div');
 let text1 = await page.evaluate(h1 => h1.textContent, title1[0]);
 await page.waitForXPath('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[3]/div/div[2]/div[2]/div[1]/div[1]/div')
 const title2 = await page.$x('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[3]/div/div[2]/div[2]/div[1]/div[1]/div');
 let text2 = await page.evaluate(h1 => h1.textContent, title2[0]);
 await page.waitForXPath('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[3]/div/div[2]/div[2]/div[1]/div[2]/div')
 const title3 = await page.$x('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[3]/div/div[2]/div[2]/div[1]/div[2]/div');
 let text3 = await page.evaluate(h1 => h1.textContent, title3[0]);
 await page.waitForXPath('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[3]/div/div[3]/div[2]/div[1]/div[1]/div')
 const title4 = await page.$x('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[3]/div/div[3]/div[2]/div[1]/div[1]/div');
 let text4 = await page.evaluate(h1 => h1.textContent, title4[0]);
 await page.waitForXPath('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[3]/div/div[1]/div[2]/div[1]/div[1]/div')
 const title5 = await page.$x('//*[@id="wrapper"]/div[1]/div/div[2]/div[2]/div/span/div/div[3]/div/div[3]/div[2]/div[1]/div[2]/div');
 let text5 = await page.evaluate(h1 => h1.textContent, title5[0]);
 let ress = { 
    type : text,
    price : text1,
    type2 : text2,
    price2 : text3,
    type3 : text4,
    price3 : text5
};

   await browser.close();
    return ress;  
 
    } catch(error){
       
    return failed;
    }
}; 
module.exports=uber;   